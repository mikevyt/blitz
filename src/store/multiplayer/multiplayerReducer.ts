import { Reducer } from "redux";
import {
  AddHostAction,
  AddNameAction,
  MultiplayerAction,
  MultiplayerActionType,
  MultiplayerState,
} from "./multiplayerTypes";

export const initialState: MultiplayerState = {
  name: { id: "" },
  host: "",
};

export const MultiplayerReducer: Reducer<
  MultiplayerState,
  MultiplayerAction
> = (state = initialState, action) => {
  switch (action.type) {
    case MultiplayerActionType.ADD_NAME:
      return addNameReducer(state, action);
    case MultiplayerActionType.ADD_HOST:
      return addHostReducer(state, action);
    default:
      return state;
  }
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
