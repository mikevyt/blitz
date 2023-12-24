import { Button } from "antd";
import { useAppSelector } from "../store/hooks";
import React, { useState } from "react";
import Title from "antd/es/typography/Title";
import { CopyOutlined } from "@ant-design/icons";

export const AddPlayer = () => {
  const peer = useAppSelector((state) => state.peer);
  const [loading, setLoading] = useState(false);

  const copyCode = async () => {
    setLoading(true);
    await navigator.clipboard.writeText(peer.id ?? "");
    setLoading(false);
  };

  return (
    <>
      <div>
        Code: {peer.id}
        <Button icon={<CopyOutlined />} onClick={copyCode} loading={loading} />
      </div>
      <Title level={2} onClick={copyCode}>
        Players (0/4)
      </Title>
      <Button>Start Game</Button>
    </>
  );
};
