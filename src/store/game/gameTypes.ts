import { PlayingCard } from "../../types/PlayingCard";

export enum GameActionType {
  SELECT_CARD = "SELECT_CARD",
  DESELECT_CARD = "DESELECT_CARD",
}

export interface GameState {
  readonly selectedCard?: PlayingCard;
}
