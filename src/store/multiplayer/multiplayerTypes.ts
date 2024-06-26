import { AnyAction } from "redux";

export enum MultiplayerActionType {
  UPDATE = "UPDATE",
  ADD_NAME = "ADD_NAME",
  ADD_EMOJI = "ADD_EMOJI",
  ADD_HOST = "ADD_HOST",
  ADD_PREVIOUS_SCORES = "ADD_PREVIOUS_SCORES",
  START_GAME = "START_GAME",
  END_ROUND = "END_ROUND",
  END_GAME = "END_GAME",
}

export interface MultiplayerState {
  readonly name: { [id: string]: string };
  readonly emoji: { [id: string]: string };
  readonly host: string;
  readonly gameStatus:
    | "NOT_STARTED"
    | "ROUND_STARTED"
    | "ROUND_ENDED"
    | "ENDED";
  readonly previousScore: { [id: string]: number[] };
}

export type MultiplayerAction =
  | AddNameAction
  | AddEmojiAction
  | AddHostAction
  | AddPreviousScoresAction
  | UpdateAction
  | StartGameAction
  | EndRoundAction
  | EndGameAction;

export interface UpdateAction extends AnyAction {
  type: MultiplayerActionType.UPDATE;
  state: MultiplayerState;
}

export interface AddNameAction extends AnyAction {
  type: MultiplayerActionType.ADD_NAME;
  id: string;
  name: string;
}

export interface AddEmojiAction extends AnyAction {
  type: MultiplayerActionType.ADD_EMOJI;
  id: string;
  emoji: string;
}

export interface AddHostAction extends AnyAction {
  type: MultiplayerActionType.ADD_HOST;
  id: string;
}
export interface AddPreviousScoresAction extends AnyAction {
  type: MultiplayerActionType.ADD_PREVIOUS_SCORES;
  scores: Map<string, number>;
}

export interface StartGameAction extends AnyAction {
  type: MultiplayerActionType.START_GAME;
}

export interface EndRoundAction extends AnyAction {
  type: MultiplayerActionType.END_ROUND;
}
export interface EndGameAction extends AnyAction {
  type: MultiplayerActionType.END_GAME;
}
