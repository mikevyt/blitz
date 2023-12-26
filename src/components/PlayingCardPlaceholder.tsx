import { Card } from "antd";
import React from "react";

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
