import { PlayingCard } from "./PlayingCard";

export interface PlayerState {
  spread: PlayingCard[];
  blitz: PlayingCard[];
  wood: PlayingCard[];
  center: PlayingCard[];
}
