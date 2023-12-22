import React from "react";
import { PlayerState } from "../types/PlayerState";
import { PlayingCardStack } from "./PlayingCardStack";
import { LabelledArea } from "./LabelledArea";
import { PlayingCard } from "./PlayingCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateWood } from "../store/game/gameActions";
import { Button } from "antd";
import { PlayingCardPlaceholder } from "./PlayingCardPlaceholder";

export const PlayingCardArea = () => {
  const gameState = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();
  const currentWoodIndex = gameState.woodVisible?.["id"] || -1;

  const handleClick = () => {
    // handle overflow
    if (currentWoodIndex + 3 > gameState.wood["id"].length) {
      dispatch(
        updateWood("id", currentWoodIndex + 3 - gameState.wood["id"].length)
      );
    } else {
      dispatch(updateWood("id", currentWoodIndex + 3));
    }
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
        {gameState.post["id"].map((card, i) => (
          <PlayingCard key={i} card={card} />
        ))}
      </LabelledArea>
      <LabelledArea label="Blitz">
        <PlayingCardStack cards={gameState.blitz["id"]} />
      </LabelledArea>
      <LabelledArea label="Wood">
        {currentWoodIndex !== -1 && (
          <PlayingCardStack
            cards={gameState.wood["id"].slice(currentWoodIndex)}
          />
        )}
        {currentWoodIndex !== gameState.wood["id"].length - 1 ? (
          <PlayingCardPlaceholder />
        ) : (
          <PlayingCardPlaceholder style={{ backgroundColor: "white" }} />
        )}
      </LabelledArea>
      <Button onClick={handleClick}>Flip Wood</Button>
    </div>
  );
};
