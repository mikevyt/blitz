import { GameState, MoveCardPostToNewDutchPileAction } from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardPostToNewDutchPileReducer = (
  state: GameState,
  action: MoveCardPostToNewDutchPileAction
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
