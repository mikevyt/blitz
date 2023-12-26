import {
  GameState,
  MoveCardSpreadToExistingCenterPileAction,
} from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

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
    [id]: state.spread[id].map((cards) =>
      cards.filter((card) => !isEqual(card, startingCard))
    ),
  };

  return { ...state, center, spread };
};
