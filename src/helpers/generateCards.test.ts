import { PlayingCard } from "../types/PlayingCard";
import { generateCards } from "./generateCards";

describe("generateCards", () => {
  it("should return cards", () => {
    expect(generateCards("testId")).toStrictEqual([
      {
        color: "red",
        digit: 1,
        location: "wood",
        owner: "testId",
        positive: false,
      },
      {
        color: "yellow",
        digit: 1,
        location: "wood",
        owner: "testId",
        positive: true,
      },
      {
        color: "green",
        digit: 1,
        location: "wood",
        owner: "testId",
        positive: false,
      },
      {
        color: "blue",
        digit: 1,
        location: "wood",
        owner: "testId",
        positive: true,
      },
      {
        color: "red",
        digit: 2,
        location: "wood",
        owner: "testId",
        positive: false,
      },
      {
        color: "yellow",
        digit: 2,
        location: "wood",
        owner: "testId",
        positive: true,
      },
      {
        color: "green",
        digit: 2,
        location: "wood",
        owner: "testId",
        positive: false,
      },
      {
        color: "blue",
        digit: 2,
        location: "wood",
        owner: "testId",
        positive: true,
      },
      {
        color: "red",
        digit: 3,
        location: "wood",
        owner: "testId",
        positive: false,
      },
      {
        color: "yellow",
        digit: 3,
        location: "wood",
        owner: "testId",
        positive: true,
      },
      {
        color: "green",
        digit: 3,
        location: "wood",
        owner: "testId",
        positive: false,
      },
      {
        color: "blue",
        digit: 3,
        location: "wood",
        owner: "testId",
        positive: true,
      },
      {
        color: "red",
        digit: 4,
        location: "wood",
        owner: "testId",
        positive: false,
      },
      {
        color: "yellow",
        digit: 4,
        location: "wood",
        owner: "testId",
        positive: true,
      },
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
    ]);
  });
});
