
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { DialectCard, CardType, GameState } from './types';
import { ALL_CARDS } from './constants';
import { joinRoom, Room } from 'trystero';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    gameStarted: false,
    decks: { archetypes: [], age1: [], age2: [], age3: [], legacy: [] },
    hands: {},
    tableau: [],
    currentPlayerId: '',
    playerIds: [],
  });

  // Ref per lo stato più recente, necessario per inviare lo stato corretto ai nuovi Peer
  const gameStateRef = useRef(gameState);
  useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);

  const [myPlayerName, setMyPlayerName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [peers, setPeers] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'table' | 'hand'>('table');
  const [selectedCard, setSelectedCard] = useState<DialectCard | null>(null);
  
  const roomRef = useRef<Room | null>(null);
  const sendStateRef = useRef<((data: GameState) => void) | null>(null);

  // Funzione centralizzata per aggiornare lo stato locale e trasmetterlo
  const syncState = useCallback((newState: GameState) => {
    setGameState(newState);
    if (sendStateRef.current) {
      sendStateRef.current(newState);
    }
  }, []);

  const shuffle = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const initializeGame = () => {
    const initialState: GameState = {
      gameStarted: true,
      decks: {
        archetypes: shuffle(ALL_CARDS.filter(c => c.type === CardType.ARCHETYPE)),
        age1: shuffle(ALL_CARDS.filter(c => c.type === CardType.AGE1)),
        age2: shuffle(ALL_CARDS.filter(c => c.type === CardType.AGE2)),
        age3: shuffle(ALL_CARDS.filter(c => c.type === CardType.AGE3)),
        legacy: shuffle(ALL_CARDS.filter(c => c.type === CardType.LEGACY)),
      },
      hands: { [myPlayerName]: [] },
      tableau: [],
      currentPlayerId: myPlayerName,
      playerIds: [myPlayerName],
    };
    syncState(initialState);
  };

  const connectToRoom = (rId: string, pName: string) => {
    const config = { appId: 'dialect-p2p-sync-v1' };
    const room = joinRoom(config, rId.toLowerCase().trim());
    roomRef.current = room;

    const [sendState, getState] = room.makeAction<GameState>('gameState');
    sendStateRef.current = sendState;

    room.onPeerJoin(peerId => {
      setPeers(prev => [...prev, peerId]);
      // IMPORTANTE: Usa la Ref per mandare lo stato aggiornato, non la variabile chiusa nello scope
      if (gameStateRef.current.gameStarted) {
        sendState(gameStateRef.current);
      }
    });

    room.onPeerLeave(peerId => {
      setPeers(prev => prev.filter(p => p !== peerId));
    });

    getState((data) => {
      setGameState(data);
    });

    setRoomId(rId);
    setMyPlayerName(pName);
  };

  const drawCard = (deckKey: keyof GameState['decks']) => {
    const deck = [...gameState.decks[deckKey]];
    if (deck.length === 0) return;
    
    const card = deck.pop()!;
    const myCurrentHand = gameState.hands[myPlayerName] || [];
    const newHands = { ...gameState.hands, [myPlayerName]: [...myCurrentHand, card] };
    
    const newState = {
      ...gameState,
      decks: { ...gameState.decks, [deckKey]: deck },
      hands: newHands
    };
    syncState(newState);
  };

  const playCard = (card: DialectCard) => {
    const myHand = (gameState.hands[myPlayerName] || []).filter(c => c.id !== card.id);
    const newState = {
      ...gameState,
      hands: { ...gameState.hands, [myPlayerName]: myHand },
      tableau: [...gameState.tableau, card]
    };
    syncState(newState);
    setSelectedCard(null);
  };

  const discardFromHand = (card: DialectCard) => {
    if (!confirm("Vuoi davvero scartare questa carta definitivamente?")) return;
    const myHand = (gameState.hands[myPlayerName] || []).filter(c => c.id !== card.id);
    const newState = {
      ...gameState,
      hands: { ...gameState.hands, [myPlayerName]: myHand }
    };
    syncState(newState);
    setSelectedCard(null);
  };

  const removeFromTableau = (card: DialectCard) => {
    if (!confirm("Vuoi davvero rimuovere questa carta dal tavolo?")) return;
    const newTableau = gameState.tableau.filter(c => c.id !== card.id);
    const newState = {
      ...gameState,
      tableau: newTableau
    };
    syncState(newState);
    setSelectedCard(null);
  };

  const CardView: React.FC<{ card: DialectCard }> = ({ card }) => (
    <div 
      onClick={() => setSelectedCard(card)}
      className={`relative w-40 h-56 bg-white rounded-lg shadow-md border p-3 cursor-pointer hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group
        ${card.isAction ? 'border-red-400 bg-red-50/20' : 'border-stone-200'}
      `}
    >
      <div>
        <div className="text-[8px] uppercase tracking-tighter text-stone-400 mb-1 font-cinzel">
          {card.isAction ? 'Azione' : card.type}
        </div>
        <h3 className="text-xs font-bold font-cinzel text-red-900 border-b border-stone-100 pb-1 mb-1 leading-tight">
          {card.title}
        </h3>
        <p className="text-[10px] text-stone-600 leading-tight line-clamp-5">
          {card.description}
        </p>
      </div>
      <div className="mt-1 pt-1 border-t border-stone-100">
        <p className="text-[9px] italic text-red-800 font-semibold line-clamp-2">
          {card.prompt}
        </p>
      </div>
    </div>
  );

  if (!roomId || !myPlayerName) {
    return <LoginScreen onConnect={connectToRoom} />;
  }

  if (!gameState.gameStarted) {
    return <SetupScreen onStart={initializeGame} roomId={roomId} peersCount={peers.length} />;
  }

  const isCardInHand = gameState.hands[myPlayerName]?.some(c => c.id === selectedCard?.id);
  const isCardOnTable = gameState.tableau.some(c => c.id === selectedCard?.id);

  return (
    <div className="min-h-screen pb-12 flex flex-col bg-[#f5f2e9]">
      <header className="bg-stone-900 text-stone-100 p-4 shadow-2xl sticky top-0 z-50 border-b border-stone-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col">
            <h1 className="text-2xl font-cinzel font-bold tracking-[0.2em] text-stone-50">DIALECT</h1>
            <div className="flex items-center gap-2">
               <span className="text-[8px] px-1.5 py-0.5 bg-stone-700 rounded text-stone-500 font-mono tracking-tighter">STANZA: {roomId.toUpperCase()}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-stone-800 p-2 rounded px-4 border border-stone-700">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full pulse-online"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] uppercase tracking-widest text-stone-500 font-bold">Giocatore</span>
                <span className="text-stone-200 font-bold text-xs">{myPlayerName}</span>
              </div>
            </div>
            <div className="h-6 w-px bg-stone-700"></div>
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-widest text-stone-500 font-bold">Peer Connessi</span>
              <span className="text-stone-200 font-bold text-xs">{peers.length}</span>
            </div>
            <div className="h-6 w-px bg-stone-700"></div>
            <button 
              onClick={() => { if(confirm("Tornare al menu principale?")) location.reload(); }}
              className="text-stone-500 hover:text-red-400 text-[10px] font-bold transition-colors uppercase tracking-widest"
            >
              Esci
            </button>
          </div>
        </div>
      </header>

      <nav className="max-w-6xl mx-auto w-full px-4 mt-4">
        <div className="flex gap-4 border-b border-stone-300">
          {[
            { id: 'table', label: 'Il Tavolo' },
            { id: 'hand', label: `La tua Mano (${gameState.hands[myPlayerName]?.length || 0})` }
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-2 px-4 font-cinzel font-bold text-[11px] tracking-widest transition-all relative ${activeTab === tab.id ? 'text-red-900 border-b-2 border-red-900' : 'text-stone-400 hover:text-stone-600'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto w-full px-4 mt-8 flex-grow">
        {activeTab === 'table' && (
          <div className="space-y-12 animate-in fade-in duration-500">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {[
                { id: 'archetypes', label: 'Archetipi', color: 'bg-stone-200' },
                { id: 'age1', label: 'Età 1', color: 'bg-red-50' },
                { id: 'age2', label: 'Età 2', color: 'bg-red-100' },
                { id: 'age3', label: 'Età 3', color: 'bg-red-200' },
                { id: 'legacy', label: 'Eredità', color: 'bg-stone-300' }
              ].map(d => (
                <div key={d.id} className="flex flex-col items-center">
                  <div 
                    onClick={() => drawCard(d.id as any)}
                    className={`w-full aspect-[2/3] max-w-[130px] rounded-xl shadow-inner border-2 border-dashed border-stone-300 flex flex-col items-center justify-center cursor-pointer hover:bg-white transition-all hover:scale-105 active:scale-95 ${d.color}`}
                  >
                    <span className="text-3xl font-black text-stone-600/30">{gameState.decks[d.id as keyof GameState['decks']]?.length || 0}</span>
                    <span className="text-[8px] uppercase font-bold text-stone-400 mt-1">Pesca</span>
                  </div>
                  <p className="mt-3 font-cinzel font-bold text-[10px] text-stone-700 uppercase tracking-widest">{d.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-stone-200">
              <h2 className="font-cinzel text-xl font-bold mb-6 text-stone-800 uppercase tracking-[0.2em] flex items-center gap-4 text-center">
                <span className="h-px bg-stone-300 flex-grow"></span>
                Tableau
                <span className="h-px bg-stone-300 flex-grow"></span>
              </h2>
              <div className="flex flex-wrap gap-6 justify-center">
                {gameState.tableau.length === 0 ? (
                  <p className="text-stone-400 italic text-sm py-10">Il tavolo è vuoto. Pesca una carta e giocala dalla tua mano.</p>
                ) : (
                  gameState.tableau.map(card => <CardView key={card.id} card={card} />)
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'hand' && (
          <div className="animate-in slide-in-from-right-4 duration-500">
            <h2 className="font-cinzel text-lg font-bold mb-6 text-stone-800 uppercase tracking-widest border-l-4 border-red-900 pl-4">La tua Mano Privata</h2>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {!gameState.hands[myPlayerName] || gameState.hands[myPlayerName].length === 0 ? (
                <div className="w-full text-center py-24 bg-stone-200/30 rounded-3xl border-2 border-dashed border-stone-300">
                  <p className="text-stone-400 italic text-sm">Non hai carte in mano. Pesca dai mazzi sul Tavolo.</p>
                </div>
              ) : (
                gameState.hands[myPlayerName].map(card => <CardView key={card.id} card={card} />)
              )}
            </div>
          </div>
        )}
      </main>

      {selectedCard && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white max-w-sm w-full rounded-2xl shadow-2xl overflow-hidden border-2 border-stone-300 animate-in zoom-in-95">
            <div className={`p-8 ${selectedCard.isAction ? 'bg-red-50' : 'bg-white'}`}>
               <span className="text-[10px] uppercase font-bold text-stone-400 font-cinzel tracking-widest">{selectedCard.type}</span>
               <h2 className="text-3xl font-cinzel font-bold text-red-950 mt-2 mb-4 leading-tight">{selectedCard.title}</h2>
               <p className="text-stone-700 text-sm leading-relaxed mb-6">{selectedCard.description}</p>
               <div className="bg-stone-900 text-stone-50 p-6 rounded-xl shadow-inner border border-stone-800">
                  <span className="text-[8px] uppercase font-bold text-stone-500 block mb-2 tracking-widest">Prompt Conversazione</span>
                  <p className="text-base italic font-medium leading-snug">{selectedCard.prompt}</p>
               </div>
            </div>
            <div className="p-4 bg-stone-50 flex flex-col gap-2 border-t border-stone-200">
              <div className="flex gap-2">
                {isCardInHand && (
                  <>
                    <button 
                      onClick={() => playCard(selectedCard)}
                      className="flex-1 bg-red-900 text-white font-bold py-3 rounded-xl hover:bg-red-800 transition-all shadow-lg active:scale-95 text-xs"
                    >
                      Gioca sul Tavolo
                    </button>
                    <button 
                      onClick={() => discardFromHand(selectedCard)}
                      className="flex-1 bg-stone-200 text-stone-700 font-bold py-3 rounded-xl hover:bg-stone-300 transition-all text-xs"
                    >
                      Scarta
                    </button>
                  </>
                )}
                {isCardOnTable && (
                  <button 
                    onClick={() => removeFromTableau(selectedCard)}
                    className="flex-1 bg-red-100 text-red-900 font-bold py-3 rounded-xl hover:bg-red-200 transition-all text-xs"
                  >
                    Rimuovi dal Tavolo
                  </button>
                )}
              </div>
              <button 
                onClick={() => setSelectedCard(null)}
                className="py-3 px-6 rounded-xl font-bold border border-stone-300 text-stone-500 hover:bg-white transition-all w-full text-xs"
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="mt-20 text-center text-stone-300 text-[9px] px-4 pb-12 uppercase tracking-[0.4em] font-bold font-cinzel">
        <p>Dialect &copy; Kathryn Hymes & Hakan Seyalıoğlu</p>
      </footer>
    </div>
  );
};

const LoginScreen: React.FC<{ onConnect: (rId: string, pName: string) => void }> = ({ onConnect }) => {
  const [pName, setPName] = useState('');
  const [rId, setRId] = useState('');

  return (
    <div className="min-h-screen bg-stone-900 flex items-center justify-center p-6 font-crimson">
      <div className="max-w-md w-full bg-[#f5f2e9] rounded-[2rem] border-4 border-stone-800 shadow-2xl p-10 space-y-8 animate-in zoom-in-95">
        <div className="text-center pb-6 border-b-2 border-stone-200">
          <h1 className="font-cinzel text-5xl font-bold text-stone-800 tracking-[0.2em] mb-2">DIALECT</h1>
          <p className="text-stone-400 italic font-bold uppercase text-[9px] tracking-[0.3em]">Multiplayer Real-Time</p>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500 font-cinzel ml-1">Il Tuo Nome</label>
            <input 
              placeholder="Es: Maria, Il Frugatore..." 
              value={pName}
              onChange={e => setPName(e.target.value)}
              className="w-full bg-white border-2 border-stone-100 p-4 rounded-xl font-cinzel text-lg outline-none focus:border-red-900 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500 font-cinzel ml-1">Nome della Stanza</label>
            <input 
              placeholder="Es: Partita-Venerdì" 
              value={rId}
              onChange={e => setRId(e.target.value)}
              className="w-full bg-white border-2 border-stone-100 p-4 rounded-xl font-cinzel text-lg outline-none focus:border-red-900 transition-all uppercase"
            />
          </div>
          <button 
            onClick={() => pName && rId && onConnect(rId, pName)}
            disabled={!pName || !rId}
            className="w-full bg-red-950 text-white font-cinzel text-xl font-bold py-5 rounded-2xl hover:bg-red-900 transition-all shadow-xl disabled:opacity-30 active:scale-95"
          >
            ENTRA NELLA STANZA
          </button>
        </div>
        <p className="text-[10px] text-stone-400 text-center uppercase tracking-widest font-bold">
          Condividi il nome della stanza con i tuoi amici
        </p>
      </div>
    </div>
  );
};

const SetupScreen: React.FC<{ roomId: string, peersCount: number, onStart: () => void }> = ({ roomId, peersCount, onStart }) => {
  return (
    <div className="min-h-screen bg-stone-900 flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-[#f5f2e9] rounded-[2.5rem] border-4 border-stone-800 shadow-2xl p-12 space-y-10 animate-in fade-in duration-700">
        <div className="text-center">
          <h2 className="font-cinzel text-4xl font-bold text-stone-800 tracking-widest mb-2">SALA D'ATTESA</h2>
          <div className="inline-flex items-center gap-2 bg-stone-200 px-3 py-1 rounded-full border border-stone-300">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold text-stone-600 uppercase tracking-widest">{peersCount} Altri Giocatori Connessi</span>
          </div>
        </div>

        <div className="space-y-8 bg-white/50 p-8 rounded-3xl border-2 border-stone-100 shadow-inner text-center">
           <div className="space-y-2">
              <p className="text-stone-700 font-cinzel text-lg font-bold">Pronti per la sessione?</p>
              <p className="text-xs text-stone-500 leading-relaxed italic">
                "Una volta iniziato, i mazzi saranno mescolati e la sessione diverrà attiva per tutti."
              </p>
           </div>
        </div>

        <button 
          onClick={() => onStart()}
          className="w-full bg-red-950 text-white font-cinzel text-2xl font-bold py-7 rounded-3xl hover:bg-red-800 transition-all shadow-2xl shadow-red-950/40 active:scale-95"
        >
          INIZIA IL RACCONTO
        </button>
        
        <div className="text-center text-[10px] text-stone-400 font-bold uppercase tracking-[0.2em]">
          Stanza: <span className="text-red-900">{roomId.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};

export default App;
