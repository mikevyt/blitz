import { GameState, MoveCardStackToNewCenterPileAction } from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardStackToNewCenterPileReducer = (
  state: GameState,
  action: MoveCardStackToNewCenterPileAction
) => {
  const { id, startingCard } = action;
  const center = [...(state.center || [[]])];
  center.push([{ ...startingCard, location: "center" }]);
  const blitz: GameState["blitz"] = {
    ...state.blitz,
    [id]: state.blitz[id].filter((card) => !isEqual(card, startingCard)),
  };

  return { ...state, center, blitz };
};
