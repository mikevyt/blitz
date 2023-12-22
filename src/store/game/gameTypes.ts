import { PlayingCard } from "../../types/PlayingCard";

export enum GameActionType {
  UPDATE_WOOD = "UPDATE_WOOD",
  MOVE_CARD_POST_TO_EXISTING_DUTCH_PILE = "MOVE_CARD_POST_TO_EXISTING_DUTCH_PILE",
  MOVE_CARD_POST_TO_NEW_DUTCH_PILE = "MOVE_CARD_POST_TO_NEW_DUTCH_PILE",
  MOVE_CARD_BLITZ_TO_EXISTING_DUTCH_PILE = "MOVE_CARD_BLITZ_TO_EXISTING_DUTCH_PILE",
  MOVE_CARD_BLITZ_TO_NEW_DUTCH_PILE = "MOVE_CARD_BLITZ_TO_NEW_DUTCH_PILE",
  MOVE_CARD_WOOD_TO_EXISTING_DUTCH_PILE = "MOVE_CARD_WOOD_TO_EXISTING_DUTCH_PILE",
  MOVE_CARD_WOOD_TO_NEW_DUTCH_PILE = "MOVE_CARD_WOOD_TO_NEW_DUTCH_PILE",
}

export interface GameState {
  readonly dutch: PlayingCard[][];
  readonly post: { [id: string]: PlayingCard[] };
  readonly blitz: { [id: string]: PlayingCard[] };
  readonly wood: { [id: string]: PlayingCard[] };
  readonly woodVisible: { [id: string]: number };
}
