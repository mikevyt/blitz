import { GameState, MoveCardPostToExistingPostPileAction } from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardPostToExistingPostPileReducer = (
  state: GameState,
  action: MoveCardPostToExistingPostPileAction
) => {
  const { id, startingCard, destinationCard } = action;
  // add to post pile
  const post: GameState["post"] = {
    ...state.post,
    [id]: state.post[id].map((cards) =>
      cards.filter((card) => !isEqual(card, startingCard))
    ),
  };

  for (let i = 0; i < post[id].length; i++) {
    if (isEqual(post[id][i][post[id][i].length - 1], destinationCard)) {
      post[id][i].push({ ...startingCard, location: "post" });
      break;
    }
  }

  return { ...state, post };
};
