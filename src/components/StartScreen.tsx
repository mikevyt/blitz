import { Button, Card, Form, Input, Tabs, TabsProps, Typography } from "antd";
import { createPeer, stopPeerSession } from "../store/peer/peerActions";
import { PeerConnection } from "../helpers/peer";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { connectPeer } from "../store/connection/connectionActions";
import React from "react";
import { AddPlayer } from "./AddPlayer";
import { addHost, addName } from "../store/multiplayer/multiplayerActions";
import { AddCode } from "./AddCode";

const { Title } = Typography;

type FieldType = {
  name?: string;
  code?: string;
};

export const StartScreen = () => {
  const peer = useAppSelector((state) => state.peer);
  const multiplayer = useAppSelector((state) => state.multiplayer);
  const connection = useAppSelector((state) => state.connection);
  const dispatch = useAppDispatch();

  const handleStopSession = async () => {
    await PeerConnection.closePeerSession();
    dispatch(stopPeerSession());
  };

  const [name, setName] = React.useState("");

  const handleCreateGame = async () => {
    if (!name) {
      return;
    }
    await dispatch(createPeer({ name, isHost: true }));
  };

  const handleJoinGame = async () => {
    if (!name) {
      return;
    }
    await dispatch(createPeer({ name, isHost: false }));
  };

  console.log({ "multiplayer.host": multiplayer.host });
  console.log({ "peer.id": peer.id });

  return (
    <Card title="Dutch Blitz">
      {!peer.started ? (
        <>
          <Input
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Button onClick={handleCreateGame}>Create Game</Button>
          <Button onClick={handleJoinGame}>Join Game</Button>
        </>
      ) : multiplayer.host === peer.id || connection.list.length ? (
        <AddPlayer />
      ) : (
        <AddCode />
      )}
    </Card>
  );
};
