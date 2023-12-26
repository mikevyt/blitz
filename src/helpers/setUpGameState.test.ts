import { GameState } from "../store/game/gameTypes";
import { generateCards } from "./generateCards";
import { setUpGameState } from "./setUpGameState";
import * as Shuffle from "./shuffle";

describe("setUpGameState", () => {
  it("sets up cards", () => {
    jest.spyOn(Shuffle, "shuffle").mockImplementation(() => {});
    expect(setUpGameState("testId")).toStrictEqual({
      stack: {
        testId: [
          {
            color: "blue",
            digit: 1,
            location: "stack",
            owner: "testId",
            positive: true,
          },
          {
            color: "red",
            digit: 2,
            location: "stack",
            owner: "testId",
            positive: false,
          },
          {
            color: "yellow",
            digit: 2,
            location: "stack",
            owner: "testId",
            positive: true,
          },
          {
            color: "green",
            digit: 2,
            location: "stack",
            owner: "testId",
            positive: false,
          },
          {
            color: "blue",
            digit: 2,
            location: "stack",
            owner: "testId",
            positive: true,
          },
          {
            color: "red",
            digit: 3,
            location: "stack",
            owner: "testId",
            positive: false,
          },
          {
            color: "yellow",
            digit: 3,
            location: "stack",
            owner: "testId",
            positive: true,
          },
          {
            color: "green",
            digit: 3,
            location: "stack",
            owner: "testId",
            positive: false,
          },
          {
            color: "blue",
            digit: 3,
            location: "stack",
            owner: "testId",
            positive: true,
          },
          {
            color: "red",
            digit: 4,
            location: "stack",
            owner: "testId",
            positive: false,
          },
        ],
      },
      center: [],
      spread: {
        testId: [
          [
            {
              color: "red",
              digit: 1,
              location: "spread",
              owner: "testId",
              positive: false,
            },
          ],
          [
            {
              color: "yellow",
              digit: 1,
              location: "spread",
              owner: "testId",
              positive: true,
            },
          ],
          [
            {
              color: "green",
              digit: 1,
              location: "spread",
              owner: "testId",
              positive: false,
            },
          ],
        ],
      },
      stash: {
        testId: [
          {
            color: "green",
            digit: 4,
            location: "stash",
            owner: "testId",
            positive: false,
          },
          {
            color: "blue",
            digit: 4,
            location: "stash",
            owner: "testId",
            positive: true,
          },
          {
            color: "red",
            digit: 5,
            location: "stash",
            owner: "testId",
            positive: false,
          },
          {
            color: "yellow",
            digit: 5,
            location: "stash",
            owner: "testId",
            positive: true,
          },
          {
            color: "green",
            digit: 5,
            location: "stash",
            owner: "testId",
            positive: false,
          },
          {
            color: "blue",
            digit: 5,
            location: "stash",
            owner: "testId",
            positive: true,
          },
          {
            color: "red",
            digit: 6,
            location: "stash",
            owner: "testId",
            positive: false,
          },
          {
            color: "yellow",
            digit: 6,
            location: "stash",
            owner: "testId",
            positive: true,
          },
          {
            color: "green",
            digit: 6,
            location: "stash",
            owner: "testId",
            positive: false,
          },
          {
            color: "blue",
            digit: 6,
            location: "stash",
            owner: "testId",
            positive: true,
          },
          {
            color: "red",
            digit: 7,
            location: "stash",
            owner: "testId",
            positive: false,
          },
          {
            color: "yellow",
            digit: 7,
            location: "stash",
            owner: "testId",
            positive: true,
          },
          {
            color: "green",
            digit: 7,
            location: "stash",
            owner: "testId",
            positive: false,
          },
          {
            color: "blue",
            digit: 7,
            location: "stash",
            owner: "testId",
            positive: true,
          },
          {
            color: "red",
            digit: 8,
            location: "stash",
            owner: "testId",
            positive: false,
          },
          {
            color: "yellow",
            digit: 8,
            location: "stash",
            owner: "testId",
            positive: true,
          },
          {
            color: "green",
            digit: 8,
            location: "stash",
            owner: "testId",
            positive: false,
          },
          {
            color: "blue",
            digit: 8,
            location: "stash",
            owner: "testId",
            positive: true,
          },
          {
            color: "red",
            digit: 9,
            location: "stash",
            owner: "testId",
            positive: false,
          },
          {
            color: "yellow",
            digit: 9,
            location: "stash",
            owner: "testId",
            positive: true,
          },
          {
            color: "green",
            digit: 9,
            location: "stash",
            owner: "testId",
            positive: false,
          },
          {
            color: "blue",
            digit: 9,
            location: "stash",
            owner: "testId",
            positive: true,
          },
          {
            color: "red",
            digit: 10,
            location: "stash",
            owner: "testId",
            positive: false,
          },
          {
            color: "yellow",
            digit: 10,
            location: "stash",
            owner: "testId",
            positive: true,
          },
          {
            color: "green",
            digit: 10,
            location: "stash",
            owner: "testId",
            positive: false,
          },
          {
            color: "blue",
            digit: 10,
            location: "stash",
            owner: "testId",
            positive: true,
          },
        ],
      },
      stashVisible: {
        testId: -1,
      },
    });
  });
});
