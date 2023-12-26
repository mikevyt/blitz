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
  | MoveCardPostToNewDutchPileAction
  | MoveCardPostToExistingDutchPileAction
  | MoveCardPostToExistingPostPileAction
  | MoveCardBlitzToNewDutchPileAction
  | MoveCardPostToExistingDutchPileAction
  | MoveCardWoodToNewDutchPileAction
  | MoveCardWoodToExistingDutchPileAction
  | MoveCardBlitzToNewPostPileAction
  | UpdateWoodAction
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

export interface MoveCardPostToNewDutchPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_POST_TO_NEW_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
}

export interface MoveCardPostToExistingDutchPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_POST_TO_EXISTING_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
  destinationCard: PlayingCard;
}

export interface MoveCardPostToExistingPostPileAction extends AnyAction {
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

export interface MoveCardWoodToNewDutchPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_WOOD_TO_NEW_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
}

export interface MoveCardWoodToExistingDutchPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_WOOD_TO_EXISTING_DUTCH_PILE;
  id: string;
  startingCard: PlayingCard;
  destinationCard: PlayingCard;
}

export interface MoveCardBlitzToNewPostPileAction extends AnyAction {
  type: GameActionType.MOVE_CARD_BLITZ_TO_NEW_POST_PILE;
  id: string;
  startingCard: PlayingCard;
}

export interface UpdateWoodAction extends AnyAction {
  type: GameActionType.UPDATE_WOOD;
  id: string;
  index: number;
}

export interface UpdateGameAction extends AnyAction {
  type: GameActionType.UPDATE_GAME;
  state: GameState;
}
