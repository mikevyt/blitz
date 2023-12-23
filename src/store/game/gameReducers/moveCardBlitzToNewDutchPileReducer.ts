import { AnyAction } from "redux";
import { GameState } from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardBlitzToNewDutchPileReducer = (
  state: GameState,
  action: AnyAction
) => {
  const { id, startingCard } = action;
  const dutch = [...(state.dutch || [[]])];
  dutch.push([{ ...startingCard, location: "dutch" }]);
  const blitz: GameState["blitz"] = {
    ...state.blitz,
    [id]: state.blitz[id].filter((card) => !isEqual(card, startingCard)),
  };

  return { ...state, dutch, blitz };
};
