import { GameState, MoveCardStackToNewCenterPileAction } from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardStackToNewCenterPileReducer = (
  state: GameState,
  action: MoveCardStackToNewCenterPileAction
) => {
  const { id, startingCard } = action;
  const center = [...(state.center || [[]])];
  center.push([{ ...startingCard, location: "center" }]);
  const stack: GameState["stack"] = {
    ...state.stack,
    [id]: state.stack[id].filter((card) => !isEqual(card, startingCard)),
  };

  return { ...state, center, stack };
};
