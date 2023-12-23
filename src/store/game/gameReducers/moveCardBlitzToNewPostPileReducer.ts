import { GameState, MoveCardBlitzToNewPostPileAction } from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardBlitzToNewPostPileReducer = (
  state: GameState,
  action: MoveCardBlitzToNewPostPileAction
) => {
  const { id, startingCard } = action;
  const post: GameState["post"] = {
    ...state.post,
    [id]: [...state.post[id], [{ ...startingCard, location: "post" }]],
  };
  const blitz: GameState["blitz"] = {
    ...state.blitz,
    [id]: state.blitz[id].filter((card) => !isEqual(card, startingCard)),
  };

  return { ...state, post, blitz };
};
