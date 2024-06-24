import { GameState } from "../store/game/gameTypes";
import { calculateScores } from "./calculateScores";

describe("calculateScores", () => {
  it("should calculate score for the center cards correctly", () => {
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
    const result = calculateScores(game);
    expect(result.get("player1")).toEqual(2);
    expect(result.get("player2")).toEqual(1);
  });

  it("should calculate score for the stash cards correctly", () => {
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
      stack: {
        player1: [],
        player2: [
          {
            color: "red",
            digit: 3,
            location: "stack",
            owner: "player2",
            positive: false,
          },
        ],
      },
      spread: { id: [] },
      stash: { player1: [], player2: [] },
      stashVisible: { id: 1 },
    };
    const result = calculateScores(game);
    expect(result.get("player1")).toEqual(2);
    expect(result.get("player2")).toEqual(-1);
  });
});
