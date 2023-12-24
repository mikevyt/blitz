import { Button, Card, Form, Input, Tabs, TabsProps, Typography } from "antd";
import { startPeer, stopPeerSession } from "../store/peer/peerActions";
import { PeerConnection } from "../helpers/peer";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { connectPeer } from "../store/connection/connectionActions";

const { Title } = Typography;

type FieldType = {
  name?: string;
  code?: string;
};

export const StartScreen = () => {
  const peer = useAppSelector((state) => state.peer);
  const connection = useAppSelector((state) => state.connection);
  const dispatch = useAppDispatch();

  const handleStartSession = (values: FieldType) => {
    console.log({ values });
    if (!values?.name) {
      return;
    }
    dispatch(startPeer(values.name));
  };

  const handleJoinGame = (values: { code?: string }) => {
    if (!values.code) {
      return;
    }
    dispatch(connectPeer(values.code));
  };

  const handleStopSession = async () => {
    await PeerConnection.closePeerSession();
    dispatch(stopPeerSession());
  };

  return (
    <Card title="Dutch Blitz">
      <Form name="basic" onFinish={}>
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        <Button name="create" htmlType="submit">
          Create Game
        </Button>
        <Button name="join" type="primary" htmlType="submit">
          Join Game
        </Button>
      </Form>
    </Card>
  );
};

//   return !peer.started ? (
//     <Card title="Dutch Blitz">
//       <Form name="basic" onFinish={handleStartSession}>
//         <Form.Item<FieldType>
//           label="Name"
//           name="name"
//           rules={[{ required: true, message: "Please input your name!" }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//           <Button type="primary" htmlType="submit">
//             Start
//           </Button>
//         </Form.Item>
//       </Form>
//     </Card>
//   ) : (
//     <Card>
//       <Form name="basic" onFinish={handleJoinGame}>
//         <Form.Item<FieldType>
//           label="Code"
//           name="code"
//           rules={[{ required: true, message: "Please input your code!" }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//           <Button>Create Game</Button>
//           <Button type="primary" htmlType="submit">
//             Join Game
//           </Button>
//         </Form.Item>
//       </Form>
//       <Title level={4}>ID: {peer.id}</Title>
//       <Title level={4}>Name: {peer.name}</Title>
//       {connection.list.length > 0 && connection.list}
//       <Button onClick={handleStopSession}>End Game</Button>
//     </Card>
//   );
