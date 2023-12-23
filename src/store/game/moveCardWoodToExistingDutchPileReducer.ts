import { AnyAction } from "redux";
import { GameState } from "./gameTypes";
import { isEqual } from "../../types/PlayingCard";

export const moveCardWoodToExistingDutchPileReducer = (
  state: GameState,
  action: AnyAction
) => {
  const { id, startingCard, destinationCard } = action;
  const dutch = state.dutch.map((row) => [...row]);
  for (let i = 0; i < dutch.length; i++) {
    for (let j = 0; j < dutch[i].length; j++) {
      if (isEqual(dutch[i][j], destinationCard)) {
        dutch[i].push({ ...startingCard, location: "dutch" });
      }
    }
  }
  const wood: GameState["wood"] = {
    ...state.wood,
    [id]: state.wood[id].filter((card) => !isEqual(card, startingCard)),
  };

  return { ...state, dutch, wood };
};
