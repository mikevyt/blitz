import {
  GameState,
  MoveCardSpreadToExistingDutchPileAction,
} from "../gameTypes";
import { isEqual } from "../../../types/PlayingCard";

export const moveCardSpreadToExistingDutchPileReducer = (
  state: GameState,
  action: MoveCardSpreadToExistingDutchPileAction
) => {
  const { id, startingCard, destinationCard } = action;
  const dutch = state.dutch.map((row) => [...row]);
  for (let i = 0; i < dutch.length; i++) {
    if (isEqual(dutch[i][dutch[i].length - 1], destinationCard)) {
      dutch[i].push({ ...startingCard, location: "dutch" });
      break;
    }
  }

  const post: GameState["post"] = {
    ...state.post,
    [id]: state.post[id].map((cards) =>
      cards.filter((card) => !isEqual(card, startingCard))
    ),
  };

  return { ...state, dutch, post };
};
