import { PlayingCard } from "../types/PlayingCard";
import { validateMove } from "./validateMove";

describe("validateMove", () => {
  describe("center-bound card", () => {
    it("should return true if selectedCard has digit 1", () => {
      const selectedCard: PlayingCard = {
        location: "blitz",
        digit: 1,
        color: "red",
        positive: false,
        owner: "testId",
      };
      expect(validateMove({ isCenter: true, selectedCard })).toBe(true);
    });

    it("should return false if selectedCard does not digit 1", () => {
      const selectedCard: PlayingCard = {
        location: "blitz",
        digit: 2,
        color: "red",
        positive: false,
        owner: "testId",
      };
      expect(validateMove({ isCenter: true, selectedCard })).toBe(false);
    });
  });

  it.each<PlayingCard["location"]>(["blitz", "wood"])(
    "cannot add to %s pile",
    (pile) => {
      const selectedCard: PlayingCard = {
        location: "blitz",
        digit: 3,
        color: "red",
        positive: false,
        owner: "testId",
      };

      const destinationCard: PlayingCard = {
        location: pile,
        digit: 2,
        color: "red",
        positive: false,
        owner: "testId",
      };
      expect(validateMove({ selectedCard, destinationCard })).toBe(false);
    }
  );
});
