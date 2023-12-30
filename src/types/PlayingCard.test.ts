import { PlayingCard, isEqual } from "./PlayingCard";

const playingCard: PlayingCard = {
  location: "center",
  digit: 1,
  color: "red",
  positive: false,
  owner: "ownerId",
};
const cases: Array<
  [PlayingCard | undefined, PlayingCard | undefined, boolean]
> = [
  [undefined, undefined, false],
  [playingCard, undefined, false],
  [undefined, playingCard, false],
  [playingCard, { ...playingCard, digit: 2 }, false],
  [{ ...playingCard, digit: 2 }, playingCard, false],
  [playingCard, { ...playingCard, color: "blue" }, false],
  [{ ...playingCard, color: "blue" }, playingCard, false],
  [playingCard, { ...playingCard }, true],
];

describe("PlayingCard", () => {
  describe("isEqual", () => {
    it.each(cases)(
      "given %p and %p as arguments, returns %p",
      (
        card1: PlayingCard | undefined,
        card2: PlayingCard | undefined,
        expectedResult: boolean
      ) => {
        expect(
          isEqual(
            card1 as unknown as PlayingCard,
            card2 as unknown as PlayingCard
          )
        ).toEqual(expectedResult);
      }
    );
  });
});
