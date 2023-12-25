import { Button, Input } from "antd";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import React, { useState } from "react";
import Title from "antd/es/typography/Title";
import { CopyOutlined } from "@ant-design/icons";
import { connectPeer } from "../store/connection/connectionActions";
import { PeerConnection } from "../helpers/peer";
import { addEmoji, addName } from "../store/multiplayer/multiplayerActions";

export const AddCode = () => {
  const peer = useAppSelector((state) => state.peer);
  const multiplayer = useAppSelector((state) => state.multiplayer);
  const dispatch = useAppDispatch();

  const [gameCode, setGameCode] = React.useState("");

  const handleJoin = async () => {
    await dispatch(connectPeer(gameCode || ""));
    await PeerConnection.sendConnection(
      gameCode,
      addName(peer.id!, multiplayer.name[peer.id!])
    );
    await PeerConnection.sendConnection(
      gameCode,
      addEmoji(peer.id!, multiplayer.emoji[peer.id!])
    );
  };

  return (
    <>
      <Input
        placeholder="Game Code"
        onChange={(e) => setGameCode(e.target.value)}
        value={gameCode}
      />
      <Button onClick={handleJoin}>Join</Button>
    </>
  );
};
