import { Button, Card, Table } from "antd";
import { useAppSelector } from "../store/hooks";

export const EndScreen = () => {
  const multiplayer = useAppSelector((state) => state.multiplayer);
  const game = useAppSelector((state) => state.game);
  // const scores = calculateScores(game);
  const scores = new Map(
    Object.entries(multiplayer.name).map(([id, _], index) => [id, index])
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Round 1",
      dataIndex: "score",
      key: "score",
    },
  ];

  const dataSource = Object.entries(multiplayer.name).map(([id, name]) => {
    return {
      key: id,
      name: id === multiplayer.host ? name + " (Host)" : name,
      score: scores.get(id),
    };
  });

  return (
    <Card title="PileUp!">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        bordered={true}
      />
      <div style={{ display: "flex", columnGap: "2rem" }}>
        <Button>End Game</Button>
        <Button>Next Round</Button>
      </div>
    </Card>
  );
};
