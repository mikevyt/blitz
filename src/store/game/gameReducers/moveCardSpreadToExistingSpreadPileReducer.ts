import { isEqual } from "../../../types/PlayingCard";
import {
  GameState,
  MoveCardSpreadToExistingSpreadPileAction,
} from "../gameTypes";

export const moveCardSpreadToExistingSpreadPileReducer = (
  state: GameState,
  action: MoveCardSpreadToExistingSpreadPileAction
) => {
  const { id, startingCard, destinationCard } = action;
  // add to spread pile
  const spread = state.spread[id]
    .map((row) => [...row])
    .filter(
      (cards) =>
        [...cards.filter((card) => !isEqual(card, startingCard))].length
    );
  console.log({ spread });

  for (let i = 0; i < spread.length; i++) {
    if (isEqual(spread[i][spread[i].length - 1], destinationCard)) {
      spread[i].push({ ...startingCard, location: "spread" });
      break;
    }
  }

  return { ...state, spread: { ...state.spread, [id]: spread } };
};
