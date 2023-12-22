import React from "react";
import { Button, Form, Input, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { startPeer, stopPeerSession } from "../../store/peer/peerActions";
import * as connectionAction from "../../store/connection/connectionActions";
import { PeerConnection } from "../../helpers/peer";
import { setUpPlayer } from "../../helpers/setUpPlayer";
import { shuffle } from "../../helpers/shuffle";
import { PlayingCard } from "../PlayingCard";
import { CenterArea } from "../CenterArea";
import { PlayingCardArea } from "../PlayingCardArea";
import { generateCards } from "../../helpers/generateCards";

const { Title } = Typography;

type FieldType = {
  name?: string;
  code?: string;
};

export const App: React.FC = () => {
  const peer = useAppSelector((state) => state.peer);
  const connection = useAppSelector((state) => state.connection);
  const dispatch = useAppDispatch();

  const handleStartSession = (values: FieldType) => {
    if (!values?.name) {
      return;
    }
    dispatch(startPeer(values.name));
  };

  const handleJoinGame = (values: { code?: string }) => {
    if (!values.code) {
      return;
    }
    dispatch(connectionAction.connectPeer(values.code));
  };

  const handleStopSession = async () => {
    await PeerConnection.closePeerSession();
    dispatch(stopPeerSession());
  };

  return (
    <div
      style={{
        width: "100vw" /* Make content full-width */,
        height: "100vh" /* Make content full-height */,
        overflowY: "auto" /* Enable vertical scrolling within the content */,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      {/* {!peer.started ? (
        <Card title="Dutch Blitz">
          <Form name="basic" onFinish={handleStartSession}>
            <Form.Item<FieldType>
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Start
              </Button>
            </Form.Item>
          </Form>
        </Card>
      ) : (
        <Card>
          <Form name="basic" onFinish={handleJoinGame}>
            <Form.Item<FieldType>
              label="Code"
              name="code"
              rules={[{ required: true, message: "Please input your code!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button>Create Game</Button>
              <Button type="primary" htmlType="submit">
                Join Game
              </Button>
            </Form.Item>
          </Form>
          <Title level={4}>ID: {peer.id}</Title>
          <Title level={4}>Name: {peer.name}</Title>
          {connection.list.length > 0 && connection.list}
          <Button onClick={handleStopSession}>End Game</Button>
        </Card>
      )} */}
      {/* <PlayingCardStack
        cards={[{ digit: 4, color: "red", location: "blitz" }]}
      /> */}
      <CenterArea />
      <PlayingCardArea />
    </div>
  );
};

export default App;
