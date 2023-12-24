import { AnyAction } from "redux";

export enum MultiplayerActionType {
  ADD_NAME = "ADD_NAME",
}

export interface MultiplayerState {
  readonly name: { [id: string]: string };
}

export type MultiplayerAction = AddNameAction;

export interface AddNameAction extends AnyAction {
  type: MultiplayerActionType.ADD_NAME;
  id: string;
  name: string;
}
