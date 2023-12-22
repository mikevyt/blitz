import React from "react";
import { Card } from "antd";
import { PlayingCard as PlayingCardType } from "../types/PlayingCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deselectCard, selectCard } from "../store/local/localActions";

export const PlayingCardPlaceholder = ({
  style,
}: {
  style?: React.CSSProperties;
}) => {
  return (
    <Card
      bordered={false}
      style={{
        backgroundColor: "black",
        fontSize: "2rem",
        width: "5rem",
        height: "7rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
        ...style,
      }}
    />
  );
};
