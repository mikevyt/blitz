import React from "react";
import { Card } from "antd";
import { PlayingCard as PlayingCardType } from "../types/PlayingCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deselectCard, selectCard } from "../store/game/gameActions";

export const PlayingCard = ({
  card,
  style,
}: {
  card: PlayingCardType;
  style?: React.CSSProperties;
}) => {
  const gameState = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      gameState.selectedCard === card ? deselectCard() : selectCard(card)
    );
  };
  return (
    <Card
      onClick={handleClick}
      bordered={false}
      style={{
        backgroundColor: card.color,
        color: card.color === "yellow" ? "black" : "white",
        fontSize: "2rem",
        border: gameState.selectedCard === card ? "5px solid black" : 0,
        width: "5rem",
        height: "7rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
        ...style,
      }}
    >
      {card.digit}
      {card.positive ? "+" : "-"}
    </Card>
  );
};
