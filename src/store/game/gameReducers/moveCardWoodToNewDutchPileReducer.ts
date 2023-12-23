import { AnyAction } from "redux";
import { GameState } from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardWoodToNewDutchPileReducer = (
  state: GameState,
  action: AnyAction
) => {
  const { id, startingCard } = action;
  const dutch = [...(state.dutch || [[]])];
  dutch.push([{ ...startingCard, location: "dutch" }]);
  const wood: GameState["wood"] = {
    ...state.wood,
    [id]: state.wood[id].filter((card) => !isEqual(card, startingCard)),
  };

  return { ...state, dutch, wood };
};
