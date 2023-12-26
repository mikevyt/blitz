import { PlayingCard } from "./PlayingCard";

export interface PlayerState {
  spread: PlayingCard[];
  stack: PlayingCard[];
  stash: PlayingCard[];
  center: PlayingCard[];
}
