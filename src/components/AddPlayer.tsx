import { Button, List } from "antd";
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
        <Button onClick={copyCode} loading={loading}>
          Game Code <CopyOutlined />
        </Button>
      </div>
      <Title level={2} onClick={copyCode}>
        Players ({Object.entries(multiplayer.name).length}/4)
      </Title>
      <List
        itemLayout="horizontal"
        dataSource={Object.entries(multiplayer.name)}
        renderItem={([id, name]) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <div style={{ fontSize: "1rem" }}>{multiplayer.emoji[id]}</div>
              }
              title={
                <div style={{ fontSize: "1rem" }}>
                  {id === multiplayer.host ? name + " (Host)" : name}
                </div>
              }
            />
          </List.Item>
        )}
      />
      {peer.id === multiplayer.host ? (
        <Button
          disabled={Object.entries(multiplayer.name).length < 2}
          onClick={handleStartGame}
        >
          Start Game
        </Button>
      ) : (
        <div>Only the host can start the game</div>
      )}
    </>
  );
};
