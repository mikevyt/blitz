import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import React, { useState } from "react";
import Title from "antd/es/typography/Title";
import { CopyOutlined } from "@ant-design/icons";
import { startGame } from "../helpers/startGame";

export const AddPlayer = () => {
  const peer = useAppSelector((state) => state.peer);
  const multiplayer = useAppSelector((state) => state.multiplayer);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const copyCode = async () => {
    setLoading(true);
    await navigator.clipboard.writeText(peer.id ?? "");
    setLoading(false);
  };

  const names = Object.entries(multiplayer.name).map(([id, value]) =>
    id === multiplayer.host ? value + " (Host)" : value
  );

  const handleStartGame = () => {
    startGame(
      dispatch,
      peer.id!,
      Object.entries(multiplayer.name).map(([id, _]) => id)
    );
  };

  return (
    <>
      <div>
        Code: {multiplayer.host}
        <Button icon={<CopyOutlined />} onClick={copyCode} loading={loading} />
      </div>
      <Title level={2} onClick={copyCode}>
        Players ({names.length}/4)
      </Title>
      {names.map((name, i) => (
        <div key={i}>{name}</div>
      ))}
      {peer.id === multiplayer.host ? (
        <Button disabled={names.length < 2} onClick={handleStartGame}>
          Start Game
        </Button>
      ) : (
        <div>Only the host can start the game</div>
      )}
    </>
  );
};
