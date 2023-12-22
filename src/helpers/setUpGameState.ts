import { GameState } from "../store/game/gameTypes";
import { generateCards } from "./generateCards";
import { shuffle } from "./shuffle";

export const setUpGameState = (): GameState => {
  const cards = generateCards();
  shuffle(cards);

  return {
    dutch: [[]],
    post: { ["id"]: cards.splice(0, 3) },
    blitz: { ["id"]: cards.splice(0, 10) },
    wood: { ["id"]: cards },
    woodVisible: { ["id"]: -1 },
  };
};
