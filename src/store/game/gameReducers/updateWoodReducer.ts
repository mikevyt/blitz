import { GameState, UpdateWoodAction } from "../gameTypes";

export const updateWoodReducer = (
  state: GameState,
  action: UpdateWoodAction
) => {
  const { index } = action;
  return {
    ...state,
    woodVisible: { ...state.woodVisible, [action.id]: index },
  };
};
