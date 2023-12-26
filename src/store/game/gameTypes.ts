import { AnyAction } from "redux";
import { PlayingCard } from "../../types/PlayingCard";

export enum GameActionType {
  UPDATE_WOOD = "UPDATE_WOOD",
  UPDATE_GAME = "UPDATE_GAME",
  MOVE_CARD_POST_TO_EXISTING_DUTCH_PILE = "MOVE_CARD_POST_TO_EXISTING_DUTCH_PILE",
  MOVE_CARD_POST_TO_NEW_DUTCH_PILE = "MOVE_CARD_POST_TO_NEW_DUTCH_PILE",
  MOVE_CARD_POST_TO_EXISTING_POST_PILE = "MOVE_CARD_POST_TO_EXISTING_POST_PILE",
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
  | MoveCardSpreadToNewDutchPileAction
  | MoveCardSpreadToExistingDutchPileAction
  | MoveCardSpreadToExistingSpreadPileAction
  | MoveCardBlitzToNewDutchPileAction
  | MoveCardSpreadToExistingDutchPileAction
  | MoveCardStashToNewDutchPileAction
  | MoveCardStashToExistingDutchPileAction
  | MoveCardBlitzToNewSpreadPileAction
  | UpdateStashAction
  | UpdateGameAction;

export interface MoveCardBlitzToExistingDutchPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_BLITZ_TO_EXISTING_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
  destinationCard: PlayingCard;
}

export interface MoveCardBlitzToNewDutchPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_BLITZ_TO_NEW_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
}

export interface MoveCardSpreadToNewDutchPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_POST_TO_NEW_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
}

export interface MoveCardSpreadToExistingDutchPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_POST_TO_EXISTING_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
  destinationCard: PlayingCard;
}

export interface MoveCardSpreadToExistingSpreadPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_POST_TO_EXISTING_POST_PILE;
  id: string;
  startingCard: PlayingCard;
  destinationCard: PlayingCard;
}

export interface MoveCardBlitzToNewDutchPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_BLITZ_TO_NEW_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
}

export interface MoveCardBlitzToExistingDutchPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_BLITZ_TO_EXISTING_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
  destinationCard: PlayingCard;
}

export interface MoveCardStashToNewDutchPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_WOOD_TO_NEW_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
}

export interface MoveCardStashToExistingDutchPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_WOOD_TO_EXISTING_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
  destinationCard: PlayingCard;
}

export interface MoveCardBlitzToNewSpreadPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_BLITZ_TO_NEW_POST_PILE;
  id: string;
  startingCard: PlayingCard;
}

export interface UpdateStashAction extends AnyAction {
  type: GameActionType.UPDATE_WOOD;
  id: string;
  index: number;
}

export interface UpdateGameAction extends AnyAction {
  type: GameActionType.UPDATE_GAME;
  state: GameState;
}
