import { GameState, MoveCardStashToNewCenterPileAction } from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardStashToNewCenterPileReducer = (
  state: GameState,
  action: MoveCardStashToNewCenterPileAction
) => {
  const { id, startingCard } = action;
  const center = [...(state.center || [[]])];
  center.push([{ ...startingCard, location: "center" }]);
  const stash: GameState["stash"] = {
    ...state.stash,
    [id]: state.stash[id].filter((card) => !isEqual(card, startingCard)),
  };

  return { ...state, center, stash };
};
