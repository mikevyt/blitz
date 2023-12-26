import { GameState, MoveCardBlitzToNewSpreadPileAction } from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardBlitzToNewSpreadPileReducer = (
  state: GameState,
  action: MoveCardBlitzToNewSpreadPileAction
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
