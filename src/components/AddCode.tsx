import { Button, Input } from "antd";
import React from "react";
import { PeerConnection } from "../helpers/peer";
import { connectPeer } from "../store/connection/connectionActions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
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
      <div style={{ textAlign: "center" }}>
        <Button onClick={handleJoin}>Join</Button>
      </div>
    </>
  );
};
