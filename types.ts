
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
  decks: {
    archetypes: DialectCard[];
    age1: DialectCard[];
    age2: DialectCard[];
    age3: DialectCard[];
    legacy: DialectCard[];
  };
  hands: Record<string, DialectCard[]>;
  tableau: DialectCard[];
  currentPlayerId: string;
  playerIds: string[];
}
