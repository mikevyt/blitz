import { PlayingCard } from "../../types/PlayingCard";

export enum GameActionType {
  UPDATE_WOOD = "UPDATE_WOOD",
  MOVE_CARD_POST_TO_EXISTING_DUTCH_PILE = "MOVE_CARD_POST_TO_EXISTING_DUTCH_PILE",
  MOVE_CARD_POST_TO_NEW_DUTCH_PILE = "MOVE_CARD_POST_TO_NEW_DUTCH_PILE",
  MOVE_CARD_BLITZ_TO_EXISTING_DUTCH_PILE = "MOVE_CARD_BLITZ_TO_EXISTING_DUTCH_PILE",
  MOVE_CARD_BLITZ_TO_NEW_DUTCH_PILE = "MOVE_CARD_BLITZ_TO_NEW_DUTCH_PILE",
  MOVE_CARD_BLITZ_TO_NEW_POST_PILE = "MOVE_CARD_BLITZ_TO_NEW_POST_PILE",
  MOVE_CARD_WOOD_TO_EXISTING_DUTCH_PILE = "MOVE_CARD_WOOD_TO_EXISTING_DUTCH_PILE",
  MOVE_CARD_WOOD_TO_NEW_DUTCH_PILE = "MOVE_CARD_WOOD_TO_NEW_DUTCH_PILE",
}

export interface GameState {
  readonly dutch: PlayingCard[][];
  readonly post: { [id: string]: PlayingCard[][] };
  readonly blitz: { [id: string]: PlayingCard[] };
  readonly wood: { [id: string]: PlayingCard[] };
  readonly woodVisible: { [id: string]: number };
}

export type GameAction =
  | MoveCardBlitzToExistingDutchPileAction
  | MoveCardBlitzToNewDutchPileAction
  | MoveCardBlitzToExistingDutchPileAction
  | MoveCardPostToNewDutchPileAction
  | MoveCardPostToExistingDutchPileAction
  | MoveCardBlitzToNewDutchPileAction
  | MoveCardPostToExistingDutchPileAction
  | MoveCardWoodToNewDutchPileAction
  | MoveCardWoodToExistingDutchPileAction
  | MoveCardBlitzToNewPostPileAction
  | UpdateWoodAction;

export interface MoveCardBlitzToExistingDutchPileAction {
  type: GameActionType.MOVE_CARD_BLITZ_TO_EXISTING_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
  destinationCard: PlayingCard;
}

export interface MoveCardBlitzToNewDutchPileAction {
  type: GameActionType.MOVE_CARD_BLITZ_TO_NEW_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
}

export interface MoveCardPostToNewDutchPileAction {
  type: GameActionType.MOVE_CARD_POST_TO_NEW_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
}

export interface MoveCardPostToExistingDutchPileAction {
  type: GameActionType.MOVE_CARD_POST_TO_EXISTING_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
  destinationCard: PlayingCard;
}

export interface MoveCardBlitzToNewDutchPileAction {
  type: GameActionType.MOVE_CARD_BLITZ_TO_NEW_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
}

export interface MoveCardBlitzToExistingDutchPileAction {
  type: GameActionType.MOVE_CARD_BLITZ_TO_EXISTING_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
  destinationCard: PlayingCard;
}

export interface MoveCardWoodToNewDutchPileAction {
  type: GameActionType.MOVE_CARD_WOOD_TO_NEW_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
}

export interface MoveCardWoodToExistingDutchPileAction {
  type: GameActionType.MOVE_CARD_WOOD_TO_EXISTING_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
  destinationCard: PlayingCard;
}

export interface MoveCardBlitzToNewPostPileAction {
  type: GameActionType.MOVE_CARD_BLITZ_TO_NEW_POST_PILE;
  id: string;
  startingCard: PlayingCard;
}

export interface UpdateWoodAction {
  type: GameActionType.UPDATE_WOOD;
  id: string;
  index: number;
}
