import { PlayingCard } from "../types/PlayingCard";

export const validateMove = (
  startingCard: PlayingCard,
  destinationCard: PlayingCard
) => {
  // Cannot add cards to these piles
  if (["blitz", "wood"].includes(destinationCard.location)) {
    return false;
  }

  // Can only add card incremented up to dutch pile
  if (
    startingCard.digit !== destinationCard.digit + 1 &&
    destinationCard.location === "dutch"
  ) {
    return false;
  }

  // Can only add card incremented down (and opposite sign) to post pile
  if (
    (startingCard.digit !== destinationCard.digit - 1 ||
      startingCard.positive === destinationCard.positive) &&
    destinationCard.location === "post"
  ) {
    return false;
  }

  return true;
};
