import { GameState, MoveCardStashToNewDutchPileAction } from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardStashToNewDutchPileReducer = (
  state: GameState,
  action: MoveCardStashToNewDutchPileAction
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
