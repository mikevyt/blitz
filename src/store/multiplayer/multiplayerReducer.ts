import { Reducer } from "redux";
import {
  AddEmojiAction,
  AddHostAction,
  AddNameAction,
  MultiplayerAction,
  MultiplayerActionType,
  MultiplayerState,
  StartGameAction,
  UpdateAction,
} from "./multiplayerTypes";

export const initialState: MultiplayerState = {
  name: {},
  emoji: {},
  host: "",
  gameStatus: "NOT_STARTED",
};

export const MultiplayerReducer: Reducer<
  MultiplayerState,
  MultiplayerAction
> = (state = initialState, action) => {
  switch (action.type) {
    case MultiplayerActionType.UPDATE:
      return updateReducer(state, action);
    case MultiplayerActionType.ADD_NAME:
      return addNameReducer(state, action);
    case MultiplayerActionType.ADD_EMOJI:
      return addEmojiReducer(state, action);
    case MultiplayerActionType.ADD_HOST:
      return addHostReducer(state, action);
    case MultiplayerActionType.START_GAME:
      return startGameReducer(state);
    default:
      return state;
  }
};

export const updateReducer = (
  state: MultiplayerState,
  action: UpdateAction
) => {
  const { id, state: newState } = action;
  return { ...state, ...newState };
};

export const addNameReducer = (
  state: MultiplayerState,
  action: AddNameAction
) => {
  const { id, name } = action;
  return { ...state, name: { ...state.name, [id]: name } };
};

export const addEmojiReducer = (
  state: MultiplayerState,
  action: AddEmojiAction
) => {
  const { id, emoji } = action;
  return { ...state, emoji: { ...state.emoji, [id]: emoji } };
};

export const addHostReducer = (
  state: MultiplayerState,
  action: AddHostAction
) => {
  const { id } = action;
  return { ...state, host: id };
};

export const startGameReducer = (state: MultiplayerState): MultiplayerState => {
  return { ...state, gameStatus: "STARTED" };
};
