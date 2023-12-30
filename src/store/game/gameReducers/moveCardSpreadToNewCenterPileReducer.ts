import { isEqual } from "../../../types/PlayingCard";
import { GameState, MoveCardSpreadToNewCenterPileAction } from "../gameTypes";

export const moveCardSpreadToNewCenterPileReducer = (
  state: GameState,
  action: MoveCardSpreadToNewCenterPileAction
) => {
  const { id, startingCard } = action;
  const center = [...(state.center || [[]])];
  center.push([{ ...startingCard, location: "center" }]);
  const spread: GameState["spread"] = {
    ...state.spread,
    [id]: state.spread[id].filter(
      (cards) => cards.filter((card) => !isEqual(card, startingCard)).length
    ),
  };

  return { ...state, center, spread };
};
