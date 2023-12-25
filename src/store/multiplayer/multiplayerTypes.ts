import { AnyAction } from "redux";

export enum MultiplayerActionType {
  UPDATE = "UPDATE",
  ADD_NAME = "ADD_NAME",
  ADD_HOST = "ADD_HOST",
  START_GAME = "START_GAME",
}

export interface MultiplayerState {
  readonly name: { [id: string]: string };
  readonly host: string;
  readonly gameStatus: "NOT_STARTED" | "STARTED";
}

export type MultiplayerAction =
  | AddNameAction
  | AddHostAction
  | UpdateAction
  | StartGameAction;

export interface UpdateAction extends AnyAction {
  type: MultiplayerActionType.UPDATE;
  state: MultiplayerState;
}

export interface AddNameAction extends AnyAction {
  type: MultiplayerActionType.ADD_NAME;
  id: string;
  name: string;
}

export interface AddHostAction extends AnyAction {
  type: MultiplayerActionType.ADD_HOST;
  id: string;
}

export interface StartGameAction extends AnyAction {
  type: MultiplayerActionType.START_GAME;
}
