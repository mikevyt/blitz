import { GameState } from "../store/game/gameTypes";
import { generateCards } from "./generateCards";
import { shuffle } from "./shuffle";

export const setUpGameState = (): GameState => {
  const cards = generateCards();
  shuffle(cards);

  return {
    dutch: [],
    post: {
      ["id"]: cards.splice(0, 3).map((card) => [{ ...card, location: "post" }]),
    },
    blitz: {
      ["id"]: cards
        .splice(0, 10)
        .map((card) => ({ ...card, location: "blitz" })),
    },
    wood: { ["id"]: cards.map((card) => ({ ...card, location: "wood" })) },
    woodVisible: { ["id"]: -1 },
  };
};
