import { GameState, MoveCardSpreadToNewCenterPileAction } from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardSpreadToNewCenterPileReducer = (
  state: GameState,
  action: MoveCardSpreadToNewCenterPileAction
) => {
  const { id, startingCard } = action;
  const center = [...(state.center || [[]])];
  center.push([{ ...startingCard, location: "center" }]);
  const spread: GameState["spread"] = {
    ...state.spread,
    [id]: state.spread[id].map((cards) =>
      cards.filter((card) => !isEqual(card, startingCard))
    ),
  };

  return { ...state, center, spread };
};
