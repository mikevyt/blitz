import { GameState } from "../store/game/gameTypes";
import { generateCards } from "./generateCards";
import { setUpGameState } from "./setUpGameState";
import * as Shuffle from "./shuffle";

describe("setUpGameState", () => {
  it("sets up cards", () => {
    jest.spyOn(Shuffle, "shuffle").mockImplementation(() => {});
    expect(setUpGameState("testId")).toStrictEqual({
      blitz: {
        testId: [
          {
            color: "blue",
            digit: 1,
            location: "blitz",
            owner: "testId",
            positive: true,
          },
          {
            color: "red",
            digit: 2,
            location: "blitz",
            owner: "testId",
            positive: false,
          },
          {
            color: "yellow",
            digit: 2,
            location: "blitz",
            owner: "testId",
            positive: true,
          },
          {
            color: "green",
            digit: 2,
            location: "blitz",
            owner: "testId",
            positive: false,
          },
          {
            color: "blue",
            digit: 2,
            location: "blitz",
            owner: "testId",
            positive: true,
          },
          {
            color: "red",
            digit: 3,
            location: "blitz",
            owner: "testId",
            positive: false,
          },
          {
            color: "yellow",
            digit: 3,
            location: "blitz",
            owner: "testId",
            positive: true,
          },
          {
            color: "green",
            digit: 3,
            location: "blitz",
            owner: "testId",
            positive: false,
          },
          {
            color: "blue",
            digit: 3,
            location: "blitz",
            owner: "testId",
            positive: true,
          },
          {
            color: "red",
            digit: 4,
            location: "blitz",
            owner: "testId",
            positive: false,
          },
        ],
      },
      dutch: [],
      post: {
        testId: [
          [
            {
              color: "red",
              digit: 1,
              location: "post",
              owner: "testId",
              positive: false,
            },
          ],
          [
            {
              color: "yellow",
              digit: 1,
              location: "post",
              owner: "testId",
              positive: true,
            },
          ],
          [
            {
              color: "green",
              digit: 1,
              location: "post",
              owner: "testId",
              positive: false,
            },
          ],
        ],
      },
      wood: {
        testId: [
          {
            color: "green",
            digit: 4,
            location: "wood",
            owner: "testId",
            positive: false,
          },
          {
            color: "blue",
            digit: 4,
            location: "wood",
            owner: "testId",
            positive: true,
          },
          {
            color: "red",
            digit: 5,
            location: "wood",
            owner: "testId",
            positive: false,
          },
          {
            color: "yellow",
            digit: 5,
            location: "wood",
            owner: "testId",
            positive: true,
          },
          {
            color: "green",
            digit: 5,
            location: "wood",
            owner: "testId",
            positive: false,
          },
          {
            color: "blue",
            digit: 5,
            location: "wood",
            owner: "testId",
            positive: true,
          },
          {
            color: "red",
            digit: 6,
            location: "wood",
            owner: "testId",
            positive: false,
          },
          {
            color: "yellow",
            digit: 6,
            location: "wood",
            owner: "testId",
            positive: true,
          },
          {
            color: "green",
            digit: 6,
            location: "wood",
            owner: "testId",
            positive: false,
          },
          {
            color: "blue",
            digit: 6,
            location: "wood",
            owner: "testId",
            positive: true,
          },
          {
            color: "red",
            digit: 7,
            location: "wood",
            owner: "testId",
            positive: false,
          },
          {
            color: "yellow",
            digit: 7,
            location: "wood",
            owner: "testId",
            positive: true,
          },
          {
            color: "green",
            digit: 7,
            location: "wood",
            owner: "testId",
            positive: false,
          },
          {
            color: "blue",
            digit: 7,
            location: "wood",
            owner: "testId",
            positive: true,
          },
          {
            color: "red",
            digit: 8,
            location: "wood",
            owner: "testId",
            positive: false,
          },
          {
            color: "yellow",
            digit: 8,
            location: "wood",
            owner: "testId",
            positive: true,
          },
          {
            color: "green",
            digit: 8,
            location: "wood",
            owner: "testId",
            positive: false,
          },
          {
            color: "blue",
            digit: 8,
            location: "wood",
            owner: "testId",
            positive: true,
          },
          {
            color: "red",
            digit: 9,
            location: "wood",
            owner: "testId",
            positive: false,
          },
          {
            color: "yellow",
            digit: 9,
            location: "wood",
            owner: "testId",
            positive: true,
          },
          {
            color: "green",
            digit: 9,
            location: "wood",
            owner: "testId",
            positive: false,
          },
          {
            color: "blue",
            digit: 9,
            location: "wood",
            owner: "testId",
            positive: true,
          },
          {
            color: "red",
            digit: 10,
            location: "wood",
            owner: "testId",
            positive: false,
          },
          {
            color: "yellow",
            digit: 10,
            location: "wood",
            owner: "testId",
            positive: true,
          },
          {
            color: "green",
            digit: 10,
            location: "wood",
            owner: "testId",
            positive: false,
          },
          {
            color: "blue",
            digit: 10,
            location: "wood",
            owner: "testId",
            positive: true,
          },
        ],
      },
      woodVisible: {
        testId: -1,
      },
    });
  });
});
