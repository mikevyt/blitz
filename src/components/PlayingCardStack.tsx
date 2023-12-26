import { PlayingCard as PlayingCardType } from "../types/PlayingCard";
import { PlayingCard } from "./PlayingCard";

export const PlayingCardStack = ({ cards }: { cards: PlayingCardType[] }) => {
  if (!cards.length) {
    return null;
  }
  return (
    <PlayingCard
      style={{
        ...(cards.length > 1
          ? { boxShadow: "-4px 4px 0px 0px #D3D3D3" }
          : undefined),
        borderRadius: "8px",
      }}
      card={cards[cards.length - 1]}
    />
  );
};
