
export enum CardType {
  ARCHETYPE = 'Archetipo',
  AGE1 = 'Età 1',
  AGE2 = 'Età 2',
  AGE3 = 'Età 3',
  ACTION = 'Azione',
  LEGACY = 'Eredità'
}

export interface DialectCard {
  id: string;
  type: CardType;
  title: string;
  description: string;
  prompt: string;
  isAction?: boolean;
  age?: number;
}

export interface GameState {
  gameStarted: boolean;
  lastUpdated: number; // Timestamp per determinare la versione più recente
  playerNames: string[]; // Lista dei nomi dei giocatori connessi
  decks: {
    archetypes: string[];
    age1: string[];
    age2: string[];
    age3: string[];
    legacy: string[];
  };
  hands: Record<string, string[]>;
  tableau: string[];
  discardPile: string[];
}
