import { Avatar, Typography } from "antd";
import { useAppSelector } from "../store/hooks";

const { Text, Link } = Typography;

export const NameEmojiDisplay = ({ id }: { id: string }) => {
  const multiplayer = useAppSelector((state) => state.multiplayer);
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Avatar>{multiplayer.emoji[id]}</Avatar>
      <Text style={{ marginLeft: "4px" }}>{multiplayer.name[id]}</Text>
    </div>
  );
};
