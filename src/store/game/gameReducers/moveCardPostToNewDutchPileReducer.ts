import { GameState, MoveCardSpreadToNewDutchPileAction } from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardSpreadToNewDutchPileReducer = (
  state: GameState,
  action: MoveCardSpreadToNewDutchPileAction
) => {
  const { id, startingCard } = action;
  const dutch = [...(state.dutch || [[]])];
  dutch.push([{ ...startingCard, location: "dutch" }]);
  const post: GameState["post"] = {
    ...state.post,
    [id]: state.post[id].map((cards) =>
      cards.filter((card) => !isEqual(card, startingCard))
    ),
  };

  return { ...state, dutch, post };
};
