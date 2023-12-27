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

  switch (destinationCard.location) {
    // Cannot add cards to these piles
    case "stack":
    case "stash":
      return false;
    // Can only add card incremented and of same color to center pile
    case "center":
      return (
        selectedCard.digit === destinationCard.digit + 1 &&
        selectedCard.color === destinationCard.color
      );
    // Can only add card decremented and of opposite sign to spread pile
    case "spread":
      return (
        selectedCard.digit === destinationCard.digit - 1 &&
        selectedCard.positive !== destinationCard.positive
      );
  }
};
