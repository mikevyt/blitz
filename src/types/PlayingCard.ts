export interface PlayingCard {
  location: "spread" | "stack" | "stash" | "center";
  digit: number;
  color: "red" | "yellow" | "green" | "blue";
  positive: boolean;
  owner: string;
}

export const isEqual = (card1: PlayingCard, card2: PlayingCard) => {
  return (
    !!card1 &&
    !!card2 &&
    card1.digit === card2.digit &&
    card1.color === card2.color
  );
};
