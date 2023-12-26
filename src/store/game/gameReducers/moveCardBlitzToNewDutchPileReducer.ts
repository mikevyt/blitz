import { GameState, MoveCardStackToNewCenterPileAction } from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardStackToNewCenterPileReducer = (
  state: GameState,
  action: MoveCardStackToNewCenterPileAction
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
