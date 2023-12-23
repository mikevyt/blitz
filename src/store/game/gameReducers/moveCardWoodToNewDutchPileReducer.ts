import { GameState, MoveCardWoodToNewDutchPileAction } from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardWoodToNewDutchPileReducer = (
  state: GameState,
  action: MoveCardWoodToNewDutchPileAction
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
