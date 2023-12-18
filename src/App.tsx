import React from "react";
import { Button, Card, Form, Input, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { startPeer, stopPeerSession } from "./store/peer/peerActions";
import * as connectionAction from "./store/connection/connectionActions";
import { PeerConnection } from "./helpers/peer";
import Paragraph from "antd/es/typography/Paragraph";

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

  const cards = generateCards();
  shuffle(cards);

  const playerState = setUpPlayer(cards);

  return (
    <div
      style={{
        width: "100vw" /* Make content full-width */,
        height: "100vh" /* Make content full-height */,
        overflowY: "auto" /* Enable vertical scrolling within the content */,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
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

      <PlayingCardArea playerState={playerState} />
    </div>
  );
};

interface PlayingCard {
  digit: number;
  color: "red" | "yellow" | "green" | "blue";
  location: "post" | "blitz" | "wood" | "dutch";
}

export const PlayingCard = ({
  card,
  style,
}: {
  card: PlayingCard;
  style?: React.CSSProperties;
}) => {
  return (
    <Card
      bordered={false}
      style={{
        backgroundColor: card.color,
        color: card.color === "yellow" ? "black" : "white",
        fontSize: "4rem",
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
        boxShadow: "-3px 3px 0px 0px #D3D3D3",
        borderRadius: "8px",
      }}
      card={cards[0]}
    />
  );
};

export const PlayingCardArea = ({
  playerState,
}: {
  playerState: PlayerState;
}) => {
  return (
    <div
      style={{
        display: "flex",
        columnCount: 3 /* Set the number of columns */,
        columnGap: "20px" /* Set the gap between columns */,
        alignItems: "center",
      }}
    >
      {playerState.post.map((card, i) => (
        <PlayingCard key={i} card={card} />
      ))}
      <LabelledArea label="Blitz">
        <PlayingCardStack cards={playerState.blitz} />
      </LabelledArea>
      <LabelledArea label="Wood">
        <PlayingCardStack cards={playerState.wood} />
      </LabelledArea>
    </div>
  );
};

export const generateCards = () => {
  const cards: PlayingCard[] = [];
  for (let i = 1; i < 11; i++) {
    for (let color of ["red", "yellow", "green", "blue"]) {
      cards.push({
        color: color as PlayingCard["color"],
        digit: i,
        location: "blitz",
      });
    }
  }
  return cards;
};

export const shuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

interface PlayerState {
  post: PlayingCard[];
  blitz: PlayingCard[];
  wood: PlayingCard[];
  dutch: PlayingCard[];
}

export const setUpPlayer = (cards: PlayingCard[]): PlayerState => {
  return {
    dutch: [],
    post: cards.splice(0, 3),
    blitz: cards.splice(0, 10),
    wood: cards,
  };
};

export const LabelledArea = (
  props: React.PropsWithChildren<{ label: string }>
) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ border: "2px dotted #D3D3D3", padding: "8px" }}>
        {props.children}
      </div>
      <Paragraph style={{ color: "#D3D3D3" }}>{props.label}</Paragraph>
    </div>
  );
};

export default App;
