import React from "react";
import { Button, Card, Form, Input, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { startPeer, stopPeerSession } from "./store/peer/peerActions";
import * as connectionAction from "./store/connection/connectionActions";
import { PeerConnection } from "./helpers/peer";

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
    <div className="App">
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
      <PlayingCardStack cards={[{ digit: 4, color: "red" }]} />
    </div>
  );
};

interface PlayingCard {
  digit: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  color: "red" | "yellow" | "green" | "blue";
}

export const PlayingCard = ({
  card,
  style,
}: {
  card: PlayingCard;
  style: React.CSSProperties;
}) => {
  return (
    <Card
      bordered={false}
      style={{
        backgroundColor: card.color,
        color: "white",
        fontSize: "6rem",
        border: 0,
        width: "5rem",
        height: "7rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
        ...style,
      }}
    >
      {card.digit}
    </Card>
  );
};

export const PlayingCardStack = ({ cards }: { cards: PlayingCard[] }) => {
  return (
    <PlayingCard
      style={{
        boxShadow:
          "-1px 1px 0px 0px #FFF, -3px 3px 0px 0px #000000 -5px 5px 0px 0px #FFF, -7px 7px 0px 0px #000000",
        borderRadius: "8px",
      }}
      card={cards[0]}
    />
  );
};

export default App;
