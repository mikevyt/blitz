import { ThunderboltFilled } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

export const PlayingCardPlaceholder = ({
  isOpponentCard = false,
  style,
}: {
  isOpponentCard?: boolean;
  style?: React.CSSProperties;
}) => {
  if (isOpponentCard) {
    return (
      <Card
        bordered={false}
        style={{
          backgroundColor: "#d3d3d3",
          color: "white",
          fontSize: "1rem",
          width: "2.5rem",
          height: "3.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          boxShadow: "-2px 2px 0px 0px #D3D3D3",
          border: "2.5px solid white",
          ...style,
        }}
      >
        <ThunderboltFilled />
      </Card>
    );
  }
  return (
    <Card
      bordered={false}
      style={{
        backgroundColor: "#d3d3d3",
        color: "white",
        fontSize: "2rem",
        width: "5rem",
        height: "7rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
        boxShadow: "-4px 4px 0px 0px #D3D3D3",
        border: "5px solid white",
        ...style,
      }}
    >
      <ThunderboltFilled />
    </Card>
  );
};
