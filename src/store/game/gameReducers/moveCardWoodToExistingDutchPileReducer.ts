import {
  GameState,
  MoveCardStashToExistingCenterPileAction,
} from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardStashToExistingCenterPileReducer = (
  state: GameState,
  action: MoveCardStashToExistingCenterPileAction
) => {
  const { id, startingCard, destinationCard } = action;
  const dutch = state.dutch.map((row) => [...row]);
  for (let i = 0; i < dutch.length; i++) {
    if (isEqual(dutch[i][dutch[i].length - 1], destinationCard)) {
      dutch[i].push({ ...startingCard, location: "dutch" });
      break;
    }
  }
  const wood: GameState["wood"] = {
    ...state.wood,
    [id]: state.wood[id].filter((card) => !isEqual(card, startingCard)),
  };

  return { ...state, dutch, wood };
};
