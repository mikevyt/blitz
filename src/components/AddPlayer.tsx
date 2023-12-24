import { Button } from "antd";
import { useAppSelector } from "../store/hooks";
import React from "react";
import Title from "antd/es/typography/Title";

export const AddPlayer = () => {
  const peer = useAppSelector((state) => state.peer);

  const copyCode = () => {
    navigator.clipboard.writeText(peer.id ?? "");
  };

  return (
    <>
      <Title level={2} onClick={copyCode}>
        Code: {peer.id}
      </Title>
      <Title level={2} onClick={copyCode}>
        Players (0/4)
      </Title>
      <Button>Start Game</Button>
    </>
  );
};
