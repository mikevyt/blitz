import { PlayingCard } from "./PlayingCard";

export interface PlayerState {
  post: PlayingCard[];
  blitz: PlayingCard[];
  wood: PlayingCard[];
  dutch: PlayingCard[];
}
