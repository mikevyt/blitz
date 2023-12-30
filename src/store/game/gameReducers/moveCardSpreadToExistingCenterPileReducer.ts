import { isEqual } from "../../../types/PlayingCard";
import {
  GameState,
  MoveCardSpreadToExistingCenterPileAction,
} from "../gameTypes";

export const moveCardSpreadToExistingCenterPileReducer = (
  state: GameState,
  action: MoveCardSpreadToExistingCenterPileAction
) => {
  const { id, startingCard, destinationCard } = action;
  const center = state.center.map((row) => [...row]);
  for (let i = 0; i < center.length; i++) {
    if (isEqual(center[i][center[i].length - 1], destinationCard)) {
      center[i].push({ ...startingCard, location: "center" });
      break;
    }
  }

  const spread: GameState["spread"] = {
    ...state.spread,
    [id]: state.spread[id].filter(
      (cards) => cards.filter((card) => !isEqual(card, startingCard)).length
    ),
  };

  return { ...state, center, spread };
};
