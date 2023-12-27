import { isEqual } from "../../../types/PlayingCard";
import {
  GameState,
  MoveCardStackToExistingSpreadPileAction,
} from "../gameTypes";

export const moveCardStackToExistingSpreadPileReducer = (
  state: GameState,
  action: MoveCardStackToExistingSpreadPileAction
) => {
  const { id, startingCard, destinationCard } = action;
  // add to spread pile
  const spread = state.spread[id].map((row) => [...row]);

  for (let i = 0; i < spread.length; i++) {
    if (isEqual(spread[i][spread[i].length - 1], destinationCard)) {
      spread[i].push({ ...startingCard, location: "spread" });
      break;
    }
  }

  const stack: GameState["stack"] = {
    ...state.stack,
    [id]: state.stack[id].filter((card) => !isEqual(card, startingCard)),
  };

  return { ...state, spread: { ...state.spread, [id]: spread }, stack };
};
