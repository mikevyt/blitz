import React from "react";
import { PlayerState } from "../types/PlayerState";
import { PlayingCardStack } from "./PlayingCardStack";
import { LabelledArea } from "./LabelledArea";
import { PlayingCard } from "./PlayingCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateWood } from "../store/game/gameActions";
import { Button } from "antd";

export const PlayingCardArea = ({
  playerState,
}: {
  playerState: PlayerState;
}) => {
  const gameState = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();
  const currentWoodIndex = gameState.woodVisible?.["id"] || -1; // handle wood visible - should it be an index?
  console.log({ currentWoodIndex });
  console.log({ wood: playerState.wood });

  const handleClick = () => {
    // handle overflow
    if (currentWoodIndex + 3 > playerState.wood.length - 1) {
      dispatch(
        updateWood("id", currentWoodIndex + 3 - playerState.wood.length - 1)
      );
    }
    dispatch(updateWood("id", currentWoodIndex + 3));
  };

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
        {currentWoodIndex !== -1 && (
          <PlayingCardStack cards={playerState.wood.slice(currentWoodIndex)} />
        )}
        {currentWoodIndex !== playerState.wood.length - 1 && (
          <PlayingCard
            style={{
              boxShadow: "-3px 3px 0px 0px #D3D3D3",
              borderRadius: "8px",
              backgroundColor: "black",
            }}
            card={{ digit: 4, color: "red", location: "wood", positive: true }}
          />
        )}
      </LabelledArea>
      <Button onClick={handleClick}>Flip Wood</Button>
    </div>
  );
};
