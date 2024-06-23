import { GameState } from "../store/game/gameTypes";
import { calculateScores } from "./calculateScores";

describe("calculateScores", () => {
  it("should", () => {
    const game: GameState = {
      center: [
        [
          {
            color: "red",
            digit: 1,
            location: "center",
            owner: "player1",
            positive: false,
          },
          {
            color: "red",
            digit: 2,
            location: "center",
            owner: "player2",
            positive: false,
          },
        ],
        [
          {
            color: "green",
            digit: 1,
            location: "center",
            owner: "player1",
            positive: false,
          },
        ],
      ],
      stack: { id: [] },
      spread: { id: [] },
      stash: { player1: [], player2: [] },
      stashVisible: { id: 1 },
    };
    expect(calculateScores(game)).toBe(1);
  });
});
