import React from "react";
import { PlayerState } from "../types/PlayerState";
import { PlayingCardStack } from "./PlayingCardStack";
import { LabelledArea } from "./LabelledArea";
import { PlayingCard } from "./PlayingCard";

export const PlayingCardArea = ({
  playerState,
}: {
  playerState: PlayerState;
}) => {
  return (
    <div
      style={{
        display: "flex",
        columnCount: 3 /* Set the number of columns */,
        columnGap: "20px" /* Set the gap between columns */,
        alignItems: "center",
      }}
    >
      <LabelledArea label="Post">
        {playerState.post.map((card, i) => (
          <PlayingCard key={i} card={card} />
        ))}
      </LabelledArea>
      <LabelledArea label="Blitz">
        <PlayingCardStack cards={playerState.blitz} />
      </LabelledArea>
      <LabelledArea label="Wood">
        <PlayingCardStack cards={playerState.wood} />
      </LabelledArea>
    </div>
  );
};
