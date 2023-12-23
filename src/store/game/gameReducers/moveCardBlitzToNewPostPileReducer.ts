import { AnyAction } from "redux";
import { GameState } from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardBlitzToNewPostPileReducer = (
  state: GameState,
  action: AnyAction
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
