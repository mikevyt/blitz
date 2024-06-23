import { Card, List } from "antd";
import { calculateScores } from "../helpers/calculateScores";
import { useAppSelector } from "../store/hooks";

export const EndScreen = () => {
  const multiplayer = useAppSelector((state) => state.multiplayer);
  const game = useAppSelector((state) => state.game);
  const scores = calculateScores(game);

  return (
    <Card title="PileUp!">
      <List
        itemLayout="horizontal"
        dataSource={Object.entries(multiplayer.name)}
        renderItem={([id, name]) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <div style={{ fontSize: "1rem" }}>{multiplayer.emoji[id]}</div>
              }
              title={
                <div style={{ fontSize: "1rem" }}>
                  {id === multiplayer.host ? name + " (Host)" : name}:{" "}
                  {scores.get(id)}
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};
