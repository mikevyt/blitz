import { GameState, UpdateStashAction } from "../gameTypes";

export const updateStashReducer = (
  state: GameState,
  action: UpdateStashAction
) => {
  const { index } = action;
  return {
    ...state,
    woodVisible: { ...state.woodVisible, [action.id]: index },
  };
};
