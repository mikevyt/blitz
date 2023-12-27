import { isEqual } from "../../../types/PlayingCard";
import {
  GameState,
  MoveCardStashToExistingSpreadPileAction,
} from "../gameTypes";

export const moveCardStashToExistingSpreadPileReducer = (
  state: GameState,
  action: MoveCardStashToExistingSpreadPileAction
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

  const stash: GameState["stash"] = {
    ...state.stash,
    [id]: state.stash[id].filter((card) => !isEqual(card, startingCard)),
  };

  return { ...state, spread: { ...state.spread, [id]: spread }, stash };
};
