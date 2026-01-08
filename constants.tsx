
import { DialectCard, CardType } from './types';

export const ALL_CARDS: DialectCard[] = [
  // --- ARCHETIPI ---
  {
    id: 'arch-1', type: CardType.ARCHETYPE, title: 'ARTISTA', 
    description: 'L\'Isolamento ha un certo fascino grazie a te. Ci tieni in vita quando le cose sembrano più buie. La gente ti parla del tuo capolavoro.', 
    prompt: 'Ti identifichi con due Aspetti. Uno di questi è la tua musa.'
  },
  {
    id: 'arch-2', type: CardType.ARCHETYPE, title: 'FRUGATORE', 
    description: 'Qualcosa scarseggia qui. Ci affidiamo a te per fornire ogni scarto che puoi recuperare. La gente ti parla di come ottenere ciò di cui ha bisogno.', 
    prompt: 'Ti identifichi con due Aspetti. Uno dei nostri Aspetti sta causando la scarsità.'
  },
  {
    id: 'arch-3', type: CardType.ARCHETYPE, title: 'MEDIATORE', 
    description: 'Le fazioni nell\'Isolamento sono spesso ai ferri corti. Mantieni la pace come meglio puoi. La gente ti parla della risoluzione dei conflitti.', 
    prompt: 'Ti identifichi con tutti gli Aspetti, almeno in superficie.'
  },
  {
    id: 'arch-4', type: CardType.ARCHETYPE, title: 'ZELOTA', 
    description: 'C\'è un modo giusto di vivere per l\'Isolamento. Tu sai qual è. Convincerai gli altri. La gente ti parla dei tuoi seguaci.', 
    prompt: 'Ti identifichi con un solo Aspetto. Lo porti decisamente troppo oltre.'
  },
  {
    id: 'arch-5', type: CardType.ARCHETYPE, title: 'ORACOLO', 
    description: 'Sai cosa sta arrivando per noi — e ti crediamo. O almeno, la maggior parte di noi. La gente ti parla di predizioni.', 
    prompt: 'Ti identifichi con due Aspetti. Uno dei nostri Aspetti sarà la nostra rovina.'
  },
  {
    id: 'arch-6', type: CardType.ARCHETYPE, title: 'GUARITORE', 
    description: 'Quando stiamo male, veniamo da te. Ti assicuri che siamo pronti a servire l\'Isolamento per un altro giorno. La gente ti parla del proprio dolore.', 
    prompt: 'Ti identifichi con due Aspetti. Uno dei nostri Aspetti è la causa del nostro dolore.'
  },
  {
    id: 'arch-7', type: CardType.ARCHETYPE, title: 'LEADER', 
    description: 'Un esempio di cosa significhi essere nell\'Isolamento, veniamo da te quando abbiamo bisogno di decisioni o azioni. La gente ti parla di cosa fare dopo.', 
    prompt: 'Ti identifichi con tutti gli Aspetti. Traggi il tuo potere da uno di essi.'
  },
  {
    id: 'arch-8', type: CardType.ARCHETYPE, title: 'PROTETTORE', 
    description: 'Costante e sicuro, sei lo scudo che protegge l\'Isolamento — dall\'esterno o dall\'interno. La gente ti parla di sicurezza.', 
    prompt: 'Ti identifichi con tutti gli Aspetti tranne uno. Hai paura dell\'ultimo rimanente.'
  },
  {
    id: 'arch-9', type: CardType.ARCHETYPE, title: 'ESPLORATORE', 
    description: 'Contiamo su di te per avventurarti dove il resto di noi non osa — per spingere i confini e scoprire nuovo potenziale. La gente ti parla dell\'ignoto.', 
    prompt: 'Ti identifichi con tutti gli Aspetti. Sai che c\'è un potenziale inesplorato in uno di essi.'
  },
  {
    id: 'arch-10', type: CardType.ARCHETYPE, title: 'MAGO', 
    description: 'Nessuno capisce come riesci a fare quello che fai. Hai i tuoi segreti. La gente ti parla quando hanno esaurito ogni opzione razionale.', 
    prompt: 'Ti identifichi con un solo Aspetto. Il tuo segreto giace al suo interno.'
  },
  {
    id: 'arch-11', type: CardType.ARCHETYPE, title: 'SOVRANO', 
    description: 'Hai il potere ultimo nell\'Isolamento, almeno sulla carta. La tua volontà dovrebbe sempre compiersi. La gente ti parla quando cerca autorità.', 
    prompt: 'Ti identifichi con due Aspetti. Temi che uno dei nostri Aspetti ti stia indebolendo.'
  },
  {
    id: 'arch-12', type: CardType.ARCHETYPE, title: 'SAGGIO', 
    description: 'Sai così tanto del passato. Così tanto che siamo destinati a ripeterlo. La gente ti parla di domande scottanti.', 
    prompt: 'Ti identifichi con due Aspetti. Uno è la fonte della tua conoscenza.'
  },
  {
    id: 'arch-13', type: CardType.ARCHETYPE, title: 'GIULLARE', 
    description: 'Abbiamo bisogno di te. Abbiamo bisogno che ci aiuti a ridere nei momenti bui. La gente ti parla quando ha bisogno di essere rallegrata.', 
    prompt: 'Ti identifichi con due Aspetti. Pensi che uno dei nostri Aspetti sia ridicolo.'
  },
  {
    id: 'arch-14', type: CardType.ARCHETYPE, title: 'INNOCENTE', 
    description: 'Perché c\'è così tanta rabbia? Siamo tutti coinvolti. Se solo potessimo andare tutti d\'accordo. La gente ti parla quando è preoccupata per te.', 
    prompt: 'Ti identifichi con tutti gli Aspetti. Uno di essi significa più di quanto tu possa realizzare.'
  },
  {
    id: 'arch-15', type: CardType.ARCHETYPE, title: 'CELEBRITÀ', 
    description: 'Tutti ti riconosciamo. Il silenzio cala in ogni stanza in cui entri. Le teste si girano. La gente ti parla degli ultimi pettegolezzi.', 
    prompt: 'Ti identifichi con un solo Aspetto. Ti ha reso famoso.'
  },

  // --- ETÀ 1 ---
  { id: 'age1-1', type: CardType.AGE1, title: 'MERAVIGLIOSO', description: 'Una visione di speranza. Latte e miele e tutto ciò che è buono. Possano i nostri giorni esserne pieni.', prompt: 'Un momento di meraviglia condiviso' },
  { id: 'age1-2', type: CardType.AGE1, title: 'SALUTO', description: 'Come ci salutiamo. Piccoli rituali per aprire una conversazione che riflettono chi siamo. Può differire in base a chi lo diciamo o quando.', prompt: 'Incontrarsi in un luogo inaspettato' },
  { id: 'age1-3', type: CardType.AGE1, title: 'VEZZEGGIATIVO', description: 'Un nome affettuoso per chiamare qualcuno nell\'Isolamento. Usare questa parola è profondamente significativo, e ricordiamo la prima volta che l\'abbiamo detta.', prompt: 'Un momento tenero condiviso in segreto' },
  { id: 'age1-4', type: CardType.AGE1, title: 'CATTIVO PRESAGIO', description: 'Un simbolo del nostro timore. Abbiamo sempre avuto preoccupazioni per il futuro, ma questa cosa lo ancora alla realtà. Quando diciamo questa parola, sentiamo quanto sia fragile l\'Isolamento.', prompt: 'Un cattivo presagio che solo alcuni riconoscono' },
  { id: 'age1-5', type: CardType.AGE1, title: 'UNITÀ DI TEMPO', description: 'Un\'importante unità di tempo nell\'Isolamento. Legata alle nostre routine, all\'ambiente o a qualunque cosa definisca il ritmo dei nostri giorni.', prompt: 'Viene fatto un piano' },
  { id: 'age1-6', type: CardType.AGE1, title: 'AMICO', description: 'Questo tipo di amicizia è unico per l\'Isolamento. Un legame che nasce da un\'attività condivisa o da un modo particolare in cui ci consideriamo l\'un l\'altro.', prompt: 'Una rivelazione tra amici' },
  { id: 'age1-7', type: CardType.AGE1, title: 'INTERCALARE', description: 'A volte abbiamo bisogno di riempire l\'aria e prendere tempo. Questo modo unico di guadagnare spazio per parlare è particolare per noi.', prompt: 'Qualcuno resta senza parole' },
  { id: 'age1-8', type: CardType.AGE1, title: 'FELICITÀ', description: 'La sensazione particolare che proviamo quando tutto sta andando per il meglio. È legata al nostro isolamento o nonostante esso?', prompt: 'Profonda felicità per alcuni' },
  { id: 'age1-9', type: CardType.AGE1, title: 'SOLDI', description: 'Valuta all\'interno dell\'Isolamento. Cosa scambiamo per servizi e come otteniamo qualcosa di più delle necessità di base?', prompt: 'Cosa i soldi possono comprare qui' },
  { id: 'age1-10', type: CardType.AGE1, title: 'PREOCCUPAZIONE', description: 'Un sentimento, alimentato dalle nostre paure, che ci tormenta nei momenti di silenzio. Un particolare filone di preoccupazione che affligge i membri dell\'Isolamento.', prompt: 'Le preoccupazioni traboccano' },
  { id: 'age1-11', type: CardType.AGE1, title: 'TECNOLOGIA', description: 'Uno strumento vitale per l\'Isolamento. Può essere qualcosa proveniente dal mondo esterno o che abbiamo sviluppato noi stessi.', prompt: 'Tecnologia andata male' },
  { id: 'age1-12', type: CardType.AGE1, title: 'OCCASIONE SPECIALE', description: 'Un evento celebrato. È particolare dell\'Isolamento o abbiamo un modo unico di riconoscerlo.', prompt: 'Il momento è giunto' },
  { id: 'age1-13', type: CardType.AGE1, title: 'IL PASSATO', description: 'Come ci riferiamo a ciò che è venuto prima e come ci ha plasmato. Può essere un periodo specifico nel passato o il passato come concetto generale.', prompt: 'Cosa ossessiona alcuni di noi' },
  { id: 'age1-14', type: CardType.AGE1, title: 'IL FUTURO', description: 'Come ci riferiamo a ciò che deve ancora venire e cosa significa per noi. Può essere un evento importante nel futuro o il futuro come concetto ampio.', prompt: 'Abbiamo visioni diverse' },
  { id: 'age1-15', type: CardType.AGE1, title: 'ONORIFICO', description: 'Un termine per mostrare un particolare livello di rispetto o deferenza nell\'Isolamento. Può essere guadagnato o dato.', prompt: 'Opporsi all\'autorità' },
  { id: 'age1-16', type: CardType.AGE1, title: 'IMPRECAZIONE', description: 'La nostra imprecazione preferita. Una parola detta con rabbia o frustrazione. Alcuni potrebbero trovarla sgradevole.', prompt: 'Un momento di cui ci pentiremo più tardi' },
  { id: 'age1-17', type: CardType.AGE1, title: 'LAVORO', description: 'L\'Isolamento non è estraneo al lavoro e alla fatica. La nostra routine quotidiana e il nostro dovere. È così che ci riferiamo a ciò che deve essere fatto.', prompt: 'Il lavoro che dobbiamo fare e il prezzo che richiede' },
  { id: 'age1-18', type: CardType.AGE1, title: 'RISORSA', description: 'Una risorsa vitale per l\'Isolamento. Senza di essa, saremmo veramente perduti. Spiega cos\'è questa risorsa.', prompt: 'Cosa fa qualcuno per ottenerne di più' },
  { id: 'age1-19', type: CardType.AGE1, title: 'BUONA FORTUNA', description: 'Come affermiamo la nostra speranza in risultati felici. Un desiderio di vittoria espresso a parole che ci lega. Un tipo particolare di fortuna per l\'Isolamento.', prompt: 'Quando la buona fortuna è più necessaria' },
  { id: 'age1-20', type: CardType.AGE1, title: 'MORTE', description: 'Il nostro linguaggio per la perdita definitiva.', prompt: 'Lasciare andare' },
  { id: 'age1-21', type: CardType.AGE1, title: 'TRISTEZZA', description: 'Una stanchezza e un conflitto particolare segnano molti giorni nell\'Isolamento. Quando abbiamo bisogno di una parola per descrivere come ci sentiamo nei momenti difficili, questo è ciò a cui attingiamo.', prompt: 'La tristezza cerca compagnia' },
  { id: 'age1-22', type: CardType.AGE1, title: 'CREA UNA PAROLA', isAction: true, description: 'Crea una parola per un concetto importante legato a un Aspetto. Spiega perché l\'origine è speciale (venuta da un\'altra lingua? smarrita nel tempo?).', prompt: 'Desideri rivelati' },

  // --- ETÀ 2 ---
  { id: 'age2-1', type: CardType.AGE2, title: 'CARATTERISTICA AMBIENTALE', description: 'Una caratteristica distinta dell\'ambiente, naturale o artificiale, che ha assunto un significato profondo per l\'Isolamento.', prompt: 'Una scalata pericolosa' },
  { id: 'age2-2', type: CardType.AGE2, title: 'FAZIONE', description: 'Un gruppo emerge all\'interno dell\'Isolamento con una forte opinione su come le cose devono cambiare. Dai loro un nome.', prompt: 'Un disaccordo reso pubblico' },
  { id: 'age2-3', type: CardType.AGE2, title: 'NUOVO RITUALE', description: 'Con il passare del tempo, le nostre routine cambiano. Un nuovo rituale quotidiano è diventato comune nell\'Isolamento.', prompt: 'Il nuovo ritmo dei nostri giorni' },
  { id: 'age2-4', type: CardType.AGE2, title: 'SCOPERTA', description: 'Viene scoperto qualcosa di nuovo. Una caratteristica geografica, un pezzo di tecnologia o qualcosa su noi stessi che era precedentemente sconosciuto.', prompt: 'Speranza in un luogo inaspettato' },
  { id: 'age2-5', type: CardType.AGE2, title: 'VIZIO', description: 'Un vizio condiviso da alcuni nell\'Isolamento si diffonde. Come si chiama e quali sono le conseguenze?', prompt: 'Dolce sollievo, fin troppo breve' },
  { id: 'age2-6', type: CardType.AGE2, title: 'CIÒ CHE GIACE FUORI', description: 'Come ci riferiamo al mondo al di fuori dell\'Isolamento. Quali ricordi ed emozioni evoca in noi?', prompt: 'Ricordiamo le cose in modo diverso' },
  { id: 'age2-7', type: CardType.AGE2, title: 'TRADITORE', description: 'Un atto di totale egoismo ci stordisce tutti. Come chiamiamo l\'atto, o le persone che lo commettono?', prompt: 'Un traditore vive tra noi' },
  { id: 'age2-8', type: CardType.AGE2, title: 'TITOLO DI COMANDO', description: 'Uno di voi sta guadagnando importanza nell\'Isolamento. Questo è un titolo usato da coloro che riconoscono la tua autorità.', prompt: 'Una chiamata che doveva essere fatta' },
  { id: 'age2-9', type: CardType.AGE2, title: 'ALLARGAMENTO', isAction: true, description: 'Qualcosa diventa una parte molto più grande della vita. Una parola si infiltra nel parlato in modo non anticipato. Spiega come il significato è diventato più generico.', prompt: 'Ciò che indossiamo con orgoglio' },
  { id: 'age2-10', type: CardType.AGE2, title: 'RESTRINGIMENTO', isAction: true, description: 'Un\'istanza specifica di qualcosa di caro aumenta d\'importanza. Prendi una parola esistente e rendila più specifica aggiungendo contesto o intento.', prompt: 'Una scommessa ad alta posta' },
  { id: 'age2-11', type: CardType.AGE2, title: 'PORTMANTEAU', isAction: true, description: 'Concetti cari si combinano. Due parole poste nelle due metà di una valigia e impacchettate in una sola.', prompt: 'Cambiamento, troppo veloce per alcuni' },
  { id: 'age2-12', type: CardType.AGE2, title: 'SOBRIQUET', isAction: true, description: 'Un soprannome che quasi sostituisce il nome di qualcuno. Spiega perché il loro ruolo nell\'Isolamento ha guadagnato loro questo nome.', prompt: 'Un volto familiare sotto una nuova luce' },
  { id: 'age2-13', type: CardType.AGE2, title: 'CAMBIAMENTO DI SUONO', isAction: true, description: 'Anche se la parola rimane la stessa, il modo in cui la diciamo cambia. Spiega perché la pronuncia è cambiata (spostamento di significato, uso o contesto).', prompt: 'Adattarsi ai nostri dintorni' },
  { id: 'age2-14', type: CardType.AGE2, title: 'EPONIMO', isAction: true, description: 'Un pezzo di linguaggio basato sul nome di qualcuno. A volte la storia dietro una parola è proprio davanti a noi.', prompt: 'Trovarsi in un luogo inaspettato' },
  { id: 'age2-15', type: CardType.AGE2, title: 'PROVERBIO', isAction: true, description: 'Si commettono errori, ma non devono essere ripetuti. Saggezza in un detto conciso. Ci dà determinazione quando ne abbiamo più bisogno.', prompt: 'Un\'azione che dobbiamo intraprendere insieme' },
  { id: 'age2-16', type: CardType.AGE2, title: 'CAMBIO DI REGISTRO', isAction: true, description: 'A volte il vero significato di una parola è il contesto in cui viene usata. Spiega perché è emerso un altro uso in un diverso contesto sociale.', prompt: 'Mondi distanti si scontrano improvvisamente' },
  { id: 'age2-17', type: CardType.AGE2, title: 'EVOLUZIONE', isAction: true, description: 'Mentre la pressione sale, cambiamo. Gioca su un Aspetto dell\'età attuale e scegli una parola di un\'età precedente. Spiega come è cambiato il significato.', prompt: 'Un\'idea sbagliata fin dall\'inizio' },
  { id: 'age2-18', type: CardType.AGE2, title: 'PRONOME', description: 'Noi. Voi. Loro. I modi astratti in cui raggruppiamo noi stessi e gli altri. Abbiamo un modo speciale di riferirci ad alcuni nell\'Isolamento.', prompt: 'Le linee tra di noi' },
  { id: 'age2-19', type: CardType.AGE2, title: 'ANTONIMO', isAction: true, description: 'Nel definire qualcosa, dobbiamo considerare anche il suo opposto. Definisci una parola opposta a una già definita.', prompt: 'Gli opposti si incontrano' },
  { id: 'age2-20', type: CardType.AGE2, title: 'IPERBOLE', isAction: true, description: 'Quella che una volta era una parola comune ora ha un impatto maggiore. Il suo significato è ora molto più forte di un tempo.', prompt: 'Montagne fatte da collinette' },
  { id: 'age2-21', type: CardType.AGE2, title: 'SINONIMO DI SOTTOGRUPPO', isAction: true, description: 'Una fazione all\'interno dell\'Isolamento non usa una delle parole esistenti come gli altri. Hanno creato una nuova parola.', prompt: 'Un movimento si diffonde' },
  { id: 'age2-22', type: CardType.AGE2, title: 'EUFEMISMO', isAction: true, description: 'Alcune cose richiedono una formulazione discreta. Una delle parole dell\'Isolamento ha assunto un nuovo peso e alcuni la affrontano solo tramite eufemismo.', prompt: 'Vicinanza e disagio' },
  { id: 'age2-23', type: CardType.AGE2, title: 'CREA UNA PAROLA', isAction: true, description: 'Crea una parola per un concetto importante legato a un Aspetto.', prompt: 'Una sorpresa per alcuni' },

  // --- ETÀ 3 ---
  { id: 'age3-1', type: CardType.AGE3, title: 'SOPRAVVIVENZA', isAction: true, description: 'Usare questa parola affievolisce le nostre possibilità di sopravvivenza. Usarla ha conseguenze disastrose. Esplora la concessione fatta per sopravvivere. Strappa la parola.', prompt: 'Un rischio folle (Può includere esterni)' },
  { id: 'age3-2', type: CardType.AGE3, title: 'ETICHETTA', isAction: true, description: 'Usare questa parola è diventato un distintivo che indossiamo. È un punto di orgoglio o qualcosa che cerchiamo di nascondere?', prompt: 'Momento della verità (Può includere esterni)' },
  { id: 'age3-3', type: CardType.AGE3, title: 'TABÙ', isAction: true, description: 'Quella che precedentemente era una parola comune è ora pronunciata solo a bassa voce o come eufemismo.', prompt: 'Ciò che era un tempo comune (Può includere esterni)' },
  { id: 'age3-4', type: CardType.AGE3, title: 'DECRETO', isAction: true, description: 'Alcune parole è meglio lasciarle non dette. Un\'aspettativa è stata forgiata dall\'autorità o dall\'interno. Strappa la parola.', prompt: 'Opporsi (Può includere esterni)' },
  { id: 'age3-5', type: CardType.AGE3, title: 'DISUSO', isAction: true, description: 'Una parola che un tempo era comune viene gradualmente dimenticata. Forse il motivo per cui ne parlavamo è svanito. Strappa la parola.', prompt: 'Nuove convenzioni' },
  { id: 'age3-6', type: CardType.AGE3, title: 'DETTO DI UNITÀ', description: 'Quando le cose sembrano più buie, questo è ciò che diciamo per ricordare chi siamo.', prompt: 'Un tempo per il coraggio (Può includere esterni)' },
  { id: 'age3-7', type: CardType.AGE3, title: 'SIMBOLO DI SPERANZA', description: 'Vediamo un raggio di speranza. Quando le cose sono più disperate, ci rivolgiamo a questo.', prompt: 'Un momento di speranza nell\'oscurità' },
  { id: 'age3-8', type: CardType.AGE3, title: 'PROMESSA', description: 'Scambiarsi parole come un legame da avere e mantenere. L\'atto di dire queste parole porta intenzione e conseguenza.', prompt: 'Parole per cui vivere' },
  { id: 'age3-9', type: CardType.AGE3, title: 'FRATTURA', isAction: true, description: 'Un gruppo si definisce non usando una delle nostre parole. Spiega perché hanno smesso di usarla.', prompt: 'Rancori resi permanenti' },
  { id: 'age3-10', type: CardType.AGE3, title: 'UNA NUOVA FONTE', isAction: true, description: 'All\'improvviso, sentiamo una parola. La nostra parola. Detta da qualcuno che non ci aspettavamo.', prompt: 'Uno strano dono (Può includere esterni)' },
  { id: 'age3-11', type: CardType.AGE3, title: 'INCOMPRENSIONE', isAction: true, description: 'Mentre la tensione sale, le voci si scontrano. Persino tra di noi, attribuiamo nuovi significati a vecchie parole.', prompt: 'Ciò che sappiamo essere vero (Può includere esterni)' },
  { id: 'age3-12', type: CardType.AGE3, title: 'COSA PORTIAMO DENTRO', isAction: true, description: 'Iniziano come sussurri, ma crescono. Voci che non sono le nostre guadagnano importanza. Una parola straniera si è infiltrata.', prompt: 'Un onesto errore (Può includere esterni)' },
  { id: 'age3-13', type: CardType.AGE3, title: 'PERCEZIONI', isAction: true, description: 'Usare questa parola porta un peso. Quando la diciamo, la gente si forma un\'immagine e cambia ciò che pensa di noi.', prompt: 'Plasmare il nostro futuro (Può includere esterni)' },
  { id: 'age3-14', type: CardType.AGE3, title: 'COSA TRAMANDIAMO', isAction: true, description: 'Bambini, nuovi arrivati, opportunità di tramandare la nostra lingua. Anche ora, siamo costretti a farlo.', prompt: 'Un\'eredità (Può includere esterni)' },

  // --- EREDITÀ ---
  { id: 'leg-1', type: CardType.LEGACY, title: 'EREDITÀ 1', description: 'Come sarai ricordato. OPPURE Dalle ceneri, spunta un germoglio. OPPURE Scacciato, ancora e ancora.', prompt: 'Fine della tua storia.' },
  { id: 'leg-2', type: CardType.LEGACY, title: 'EREDITÀ 2', description: 'Un grave malinteso. OPPURE Condividere un ricordo dei vecchi tempi. OPPURE Imbattersi in macerie e rovine.', prompt: 'Fine della tua storia.' },
  { id: 'leg-3', type: CardType.LEGACY, title: 'EREDITÀ 3', description: 'Qualcosa che gli esterni hanno da imparare. OPPURE Dire addio a ciò che un tempo era normale. OPPURE Un momento di déjà vu.', prompt: 'Fine della tua storia.' },
  { id: 'leg-4', type: CardType.LEGACY, title: 'EREDITÀ 4', description: 'Un presupposto che gli esterni fanno su di te. OPPURE Una sensazione di sollievo nella tua nuova vita. OPPURE La vergogna che accompagna la perdita.', prompt: 'Fine della tua storia.' },
  { id: 'leg-5', type: CardType.LEGACY, title: 'EREDITÀ 5', description: 'Disprezzo per i modi degli esterni. OPPURE Un rituale per i morti. OPPURE Mentre le mura crollano.', prompt: 'Fine della tua storia.' },
  { id: 'leg-6', type: CardType.LEGACY, title: 'EREDITÀ 6', description: 'Cosa si può imparare dalle macerie e dalle rovine. OPPURE Tensioni tra te e gli esterni. OPPURE Una decisione difficile presa in segreto.', prompt: 'Fine della tua storia.' },
];
