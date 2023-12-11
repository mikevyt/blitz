import React from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Menu,
  MenuProps,
  message,
  Row,
  Space,
  Typography,
  Upload,
  UploadFile,
} from "antd";
import { CopyOutlined, UploadOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { startPeer, stopPeerSession } from "./store/peer/peerActions";
import * as connectionAction from "./store/connection/connectionActions";
import { DataType, PeerConnection } from "./helpers/peer";
import { useAsyncState } from "./helpers/hooks";
import Paragraph from "antd/es/skeleton/Paragraph";

const { Title } = Typography;
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

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

  const handleStopSession = async () => {
    await PeerConnection.closePeerSession();
    dispatch(stopPeerSession());
  };

  const handleConnectOtherPeer = () => {
    connection.id != null
      ? dispatch(connectionAction.connectPeer(connection.id || ""))
      : message.warning("Please enter ID");
  };

  const [fileList, setFileList] = useAsyncState([] as UploadFile[]);
  const [sendLoading, setSendLoading] = useAsyncState(false);

  const handleUpload = async () => {
    if (fileList.length === 0) {
      message.warning("Please select file");
      return;
    }
    if (!connection.selectedId) {
      message.warning("Please select a connection");
      return;
    }
    try {
      await setSendLoading(true);
      let file = fileList[0] as unknown as File;
      let blob = new Blob([file], { type: file.type });

      await PeerConnection.sendConnection(connection.selectedId, {
        dataType: DataType.FILE,
        file: blob,
        fileName: file.name,
        fileType: file.type,
      });
      await setSendLoading(false);
      message.info("Send file successfully");
    } catch (err) {
      await setSendLoading(false);
      console.log(err);
      message.error("Error when sending file");
    }
  };

  return (
    <div className="App">
      {!peer.started ? (
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
          <Title level={4}>ID: {peer.id}</Title>
          <Title level={4}>Name: {peer.name}</Title>
        </Card>
      )}
    </div>
  );
};

export default App;
