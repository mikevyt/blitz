import { AnyAction } from "redux";

export enum MultiplayerActionType {
  UPDATE = "UPDATE",
  ADD_NAME = "ADD_NAME",
  ADD_HOST = "ADD_HOST",
}

export interface MultiplayerState {
  readonly name: { [id: string]: string };
  readonly host: string;
}

export type MultiplayerAction = AddNameAction | AddHostAction | UpdateAction;

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
