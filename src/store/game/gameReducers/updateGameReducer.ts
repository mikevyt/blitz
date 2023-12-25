import { GameState, UpdateGameAction } from "../gameTypes";

export const updateGameReducer = (
  state: GameState,
  action: UpdateGameAction
) => {
  const { state: newState } = action;
  return {
    ...newState,
  };
};
