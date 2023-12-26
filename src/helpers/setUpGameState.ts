import { GameState } from "../store/game/gameTypes";
import { generateCards } from "./generateCards";
import { shuffle } from "./shuffle";

export const setUpGameState = (id: string): GameState => {
  const cards = generateCards(id);
  shuffle(cards);

  return {
    center: [],
    spread: {
      [id]: cards.slice(0, 3).map((card) => [{ ...card, location: "spread" }]),
    },
    stack: {
      [id]: cards.slice(3, 13).map((card) => ({ ...card, location: "stack" })),
    },
    stash: {
      [id]: cards
        .slice(14, cards.length)
        .map((card) => ({ ...card, location: "stash" })),
    },
    stashVisible: { [id]: -1 },
  };
};
