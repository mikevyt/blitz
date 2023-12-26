import { GameState, MoveCardStackToNewSpreadPileAction } from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardStackToNewSpreadPileReducer = (
  state: GameState,
  action: MoveCardStackToNewSpreadPileAction
) => {
  const { id, startingCard } = action;
  const spread: GameState["spread"] = {
    ...state.spread,
    [id]: [...state.spread[id], [{ ...startingCard, location: "spread" }]],
  };
  const stack: GameState["stack"] = {
    ...state.stack,
    [id]: state.stack[id].filter((card) => !isEqual(card, startingCard)),
  };

  return { ...state, spread, stack };
};
