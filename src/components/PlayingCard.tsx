import React from "react";
import { Card } from "antd";
import { PlayingCard as PlayingCardType } from "../types/PlayingCard";

export const PlayingCard = ({
  card,
  style,
}: {
  card: PlayingCardType;
  style?: React.CSSProperties;
}) => {
  return (
    <Card
      bordered={false}
      style={{
        backgroundColor: card.color,
        color: card.color === "yellow" ? "black" : "white",
        fontSize: "2rem",
        border: 0,
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
