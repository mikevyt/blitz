import { PlayingCard } from "../types/PlayingCard";

export const colorMap: { [key in PlayingCard["color"]]: string } = {
  red: "#e74c3c",
  yellow: "#f1c40f",
  green: "#2ecc71",
  blue: "#3498db",
};
