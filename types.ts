
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
  version: number; // Incrementato per ogni modifica locale per forzare il broadcast
  decks: {
    archetypes: string[]; // Solo ID
    age1: string[];
    age2: string[];
    age3: string[];
    legacy: string[];
  };
  hands: Record<string, string[]>; // NomeGiocatore -> ID[]
  tableau: string[]; // Solo ID
  discardPile: string[]; // Solo ID
}
