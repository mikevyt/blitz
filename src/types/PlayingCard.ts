export interface PlayingCard {
  digit: number;
  color: "red" | "yellow" | "green" | "blue";
  location: "post" | "blitz" | "wood" | "dutch";
  positive: boolean;
}
