import { GameState } from "../store/game/gameTypes";
import { generateCards } from "./generateCards";
import { shuffle } from "./shuffle";

export const setUpGameState = (id: string): GameState => {
  const cards = generateCards();
  shuffle(cards);

  return {
    dutch: [],
    post: {
      [id]: cards.slice(0, 3).map((card) => [{ ...card, location: "post" }]),
    },
    blitz: {
      [id]: cards.slice(3, 13).map((card) => ({ ...card, location: "blitz" })),
    },
    wood: {
      [id]: cards
        .slice(14, cards.length)
        .map((card) => ({ ...card, location: "wood" })),
    },
    woodVisible: { [id]: -1 },
  };
};
