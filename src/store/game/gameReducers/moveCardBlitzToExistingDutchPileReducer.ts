import {
  GameState,
  MoveCardStackToExistingDutchPileAction,
} from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardStackToExistingDutchPileReducer = (
  state: GameState,
  action: MoveCardStackToExistingDutchPileAction
) => {
  const { id, startingCard, destinationCard } = action;
  const dutch = state.dutch.map((row) => [...row]);
  for (let i = 0; i < dutch.length; i++) {
    if (isEqual(dutch[i][dutch[i].length - 1], destinationCard)) {
      dutch[i].push({ ...startingCard, location: "dutch" });
      break;
    }
  }
  const blitz: GameState["blitz"] = {
    ...state.blitz,
    [id]: state.blitz[id].filter((card) => !isEqual(card, startingCard)),
  };

  return { ...state, dutch, blitz };
};
