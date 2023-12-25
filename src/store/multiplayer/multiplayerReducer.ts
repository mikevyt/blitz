import { Reducer } from "redux";
import {
  AddHostAction,
  AddNameAction,
  MultiplayerAction,
  MultiplayerActionType,
  MultiplayerState,
  UpdateAction,
} from "./multiplayerTypes";

export const initialState: MultiplayerState = {
  name: {},
  host: "",
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
    case MultiplayerActionType.ADD_HOST:
      return addHostReducer(state, action);
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

export const addHostReducer = (
  state: MultiplayerState,
  action: AddHostAction
) => {
  const { id } = action;
  return { ...state, host: id };
};
