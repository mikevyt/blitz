import { Reducer } from "redux";
import {
  AddNameAction,
  MultiplayerAction,
  MultiplayerActionType,
  MultiplayerState,
} from "./multiplayerTypes";

export const initialState: MultiplayerState = {
  name: { id: "" },
};

export const MultiplayerReducer: Reducer<
  MultiplayerState,
  MultiplayerAction
> = (state = initialState, action) => {
  switch (action.type) {
    case MultiplayerActionType.ADD_NAME:
      return addNameReducer(state, action);
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
