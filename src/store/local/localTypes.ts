import { PlayingCard } from "../../types/PlayingCard";

export enum LocalActionType {
  SELECT_CARD = "SELECT_CARD",
  DESELECT_CARD = "DESELECT_CARD",
}

export interface LocalState {
  readonly selectedCard?: PlayingCard;
}
