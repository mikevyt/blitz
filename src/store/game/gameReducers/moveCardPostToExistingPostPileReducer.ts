import {
  GameState,
  MoveCardSpreadToExistingSpreadPileAction,
} from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardSpreadToExistingSpreadPileReducer = (
  state: GameState,
  action: MoveCardSpreadToExistingSpreadPileAction
) => {
  const { id, startingCard, destinationCard } = action;
  // add to spread pile
  const spread: GameState["spread"] = {
    ...state.spread,
    [id]: state.spread[id].map((cards) =>
      cards.filter((card) => !isEqual(card, startingCard))
    ),
  };

  for (let i = 0; i < spread[id].length; i++) {
    if (isEqual(spread[id][i][spread[id][i].length - 1], destinationCard)) {
      spread[id][i].push({ ...startingCard, location: "spread" });
      break;
    }
  }

  return { ...state, spread };
};
