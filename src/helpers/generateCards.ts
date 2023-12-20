import { PlayingCard } from "../types/PlayingCard";

export const generateCards = () => {
  const cards: PlayingCard[] = [];
  for (let i = 1; i < 11; i++) {
    for (let color of ["red", "yellow", "green", "blue"]) {
      cards.push({
        color: color as PlayingCard["color"],
        digit: i,
        location: "blitz",
        positive: ["blue", "yellow"].includes(color),
      });
    }
  }
  return cards;
};
