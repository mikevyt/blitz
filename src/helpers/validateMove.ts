import { PlayingCard } from "../types/PlayingCard";

interface BaseParameters {
  selectedCard: PlayingCard;
}

type ConditionalParameters =
  | {
      isCenter: true;
      destinationCard?: never;
    }
  | {
      isCenter?: never;
      destinationCard: PlayingCard;
    };

type ValidateMoveParameters = ConditionalParameters & BaseParameters;

export const validateMove = ({
  selectedCard,
  isCenter,
  destinationCard,
}: ValidateMoveParameters) => {
  if (isCenter) {
    return selectedCard.digit === 1;
  }

  // Cannot add cards to these piles
  if (["stack", "stash"].includes(destinationCard.location)) {
    return false;
  }

  // Can only add card incremented up to center pile
  if (
    selectedCard.digit !== destinationCard.digit + 1 &&
    destinationCard.location === "center"
  ) {
    return false;
  }

  // Can only add card incremented down (and opposite sign) to spread pile
  if (
    (selectedCard.digit !== destinationCard.digit - 1 ||
      selectedCard.positive === destinationCard.positive) &&
    destinationCard.location === "spread"
  ) {
    return false;
  }

  return true;
};
