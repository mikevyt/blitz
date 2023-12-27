import { AnyAction } from "redux";
import { PlayingCard } from "../../types/PlayingCard";

export enum GameActionType {
  UPDATE_STASH = "UPDATE_STASH",
  UPDATE_GAME = "UPDATE_GAME",
  MOVE_CARD_SPREAD_TO_EXISTING_CENTER_PILE = "MOVE_CARD_SPREAD_TO_EXISTING_CENTER_PILE",
  MOVE_CARD_SPREAD_TO_NEW_CENTER_PILE = "MOVE_CARD_SPREAD_TO_NEW_CENTER_PILE",
  MOVE_CARD_SPREAD_TO_EXISTING_SPREAD_PILE = "MOVE_CARD_SPREAD_TO_EXISTING_SPREAD_PILE",
  MOVE_CARD_STASH_TO_EXISTING_SPREAD_PILE = "MOVE_CARD_STASH_TO_EXISTING_SPREAD_PILE",
  MOVE_CARD_STACK_TO_EXISTING_SPREAD_PILE = "MOVE_CARD_STACK_TO_EXISTING_SPREAD_PILE",
  MOVE_CARD_STACK_TO_EXISTING_CENTER_PILE = "MOVE_CARD_STACK_TO_EXISTING_CENTER_PILE",
  MOVE_CARD_STACK_TO_NEW_CENTER_PILE = "MOVE_CARD_STACK_TO_NEW_CENTER_PILE",
  MOVE_CARD_STACK_TO_NEW_SPREAD_PILE = "MOVE_CARD_STACK_TO_NEW_SPREAD_PILE",
  MOVE_CARD_STASH_TO_EXISTING_CENTER_PILE = "MOVE_CARD_STASH_TO_EXISTING_CENTER_PILE",
  MOVE_CARD_STASH_TO_NEW_CENTER_PILE = "MOVE_CARD_STASH_TO_NEW_CENTER_PILE",
}

export interface GameState {
  readonly center: PlayingCard[][];
  readonly spread: { [id: string]: PlayingCard[][] };
  readonly stack: { [id: string]: PlayingCard[] };
  readonly stash: { [id: string]: PlayingCard[] };
  readonly stashVisible: { [id: string]: number };
}

export type GameAction =
  | MoveCardStackToExistingCenterPileAction
  | MoveCardStackToNewCenterPileAction
  | MoveCardStackToExistingCenterPileAction
  | MoveCardSpreadToNewCenterPileAction
  | MoveCardSpreadToExistingCenterPileAction
  | MoveCardSpreadToExistingSpreadPileAction
  | MoveCardStashToExistingSpreadPileAction
  | MoveCardStackToExistingSpreadPileAction
  | MoveCardStackToNewCenterPileAction
  | MoveCardSpreadToExistingCenterPileAction
  | MoveCardStashToNewCenterPileAction
  | MoveCardStashToExistingCenterPileAction
  | MoveCardStackToNewSpreadPileAction
  | UpdateStashAction
  | UpdateGameAction;

export interface MoveCardStackToExistingCenterPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_STACK_TO_EXISTING_CENTER_PILE;
  id: string;
  startingCard: PlayingCard;
  destinationCard: PlayingCard;
}

export interface MoveCardStackToNewCenterPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_STACK_TO_NEW_CENTER_PILE;
  id: string;
  startingCard: PlayingCard;
}

export interface MoveCardSpreadToNewCenterPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_SPREAD_TO_NEW_CENTER_PILE;
  id: string;
  startingCard: PlayingCard;
}

export interface MoveCardSpreadToExistingCenterPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_SPREAD_TO_EXISTING_CENTER_PILE;
  id: string;
  startingCard: PlayingCard;
  destinationCard: PlayingCard;
}

export interface MoveCardSpreadToExistingSpreadPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_SPREAD_TO_EXISTING_SPREAD_PILE;
  id: string;
  startingCard: PlayingCard;
  destinationCard: PlayingCard;
}

export interface MoveCardStackToExistingSpreadPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_STACK_TO_EXISTING_SPREAD_PILE;
  id: string;
  startingCard: PlayingCard;
  destinationCard: PlayingCard;
}

export interface MoveCardStashToExistingSpreadPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_STASH_TO_EXISTING_SPREAD_PILE;
  id: string;
  startingCard: PlayingCard;
  destinationCard: PlayingCard;
}

export interface MoveCardStackToNewCenterPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_STACK_TO_NEW_CENTER_PILE;
  id: string;
  startingCard: PlayingCard;
}

export interface MoveCardStackToExistingCenterPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_STACK_TO_EXISTING_CENTER_PILE;
  id: string;
  startingCard: PlayingCard;
  destinationCard: PlayingCard;
}

export interface MoveCardStashToNewCenterPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_STASH_TO_NEW_CENTER_PILE;
  id: string;
  startingCard: PlayingCard;
}

export interface MoveCardStashToExistingCenterPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_STASH_TO_EXISTING_CENTER_PILE;
  id: string;
  startingCard: PlayingCard;
  destinationCard: PlayingCard;
}

export interface MoveCardStackToNewSpreadPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_STACK_TO_NEW_SPREAD_PILE;
  id: string;
  startingCard: PlayingCard;
}

export interface UpdateStashAction extends AnyAction {
  type: GameActionType.UPDATE_STASH;
  id: string;
  index: number;
}

export interface UpdateGameAction extends AnyAction {
  type: GameActionType.UPDATE_GAME;
  state: GameState;
}
