import { PlayingCard } from "../types/PlayingCard";
import { PlayerState } from "../types/PlayerState";

export const setUpPlayer = (cards: PlayingCard[]): PlayerState => {
  return {
    dutch: [],
    post: cards.splice(0, 3),
    blitz: cards.splice(0, 10),
    wood: cards,
  };
};
