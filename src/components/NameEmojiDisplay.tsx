import { Avatar, Typography } from "antd";
import { useAppSelector } from "../store/hooks";

const { Text, Link } = Typography;

export const NameEmojiDisplay = ({ id }: { id: string }) => {
  const multiplayer = useAppSelector((state) => state.multiplayer);
  const peer = useAppSelector((state) => state.peer);

  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Avatar>{multiplayer.emoji[id]}</Avatar>
      <Text style={{ marginLeft: "4px" }}>
        {multiplayer.name[id] + (peer.id === id ? " (you)" : "")}
      </Text>
    </div>
  );
};
