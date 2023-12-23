import { AnyAction } from "redux";
import { GameState } from "../gameTypes";

export const updateWoodReducer = (state: GameState, action: AnyAction) => {
  const { index } = action;
  return {
    ...state,
    woodVisible: { ...state.woodVisible, [action.id]: index },
  };
};
