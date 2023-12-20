import { Reducer } from "redux";
import { GameActionType, GameState } from "./gameTypes";

export const initialState: GameState = {
  woodVisible: undefined,
};

export const GameReducer: Reducer<GameState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GameActionType.UPDATE_WOOD:
      const { id, index } = action;
      return { ...state, woodVisible: { ...state.woodVisible, [id]: index } };
    default:
      return state;
  }
};
