import { Button, Card, Table } from "antd";
import { useAppSelector } from "../store/hooks";

export const RoundEndScreen = () => {
  const multiplayer = useAppSelector((state) => state.multiplayer);
  // const game = useAppSelector((state) => state.game);
  // const scores = calculateScores(game);
  const peer = useAppSelector((state) => state.peer);
  const previousScores = multiplayer.previousScore;
  const previousScoreCount = multiplayer.previousScore[peer.id!]?.length || 0;
  const scores = new Map(
    Object.entries(multiplayer.name).map(([id, _], index) => [id, index])
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    ...Array(previousScoreCount + 1)
      .fill(0)
      .map((i) => ({
        title: `Round ${i + 1}`,
        dataIndex: `score${i}`,
        key: `score${i}`,
      })),
  ];

  const dataSource = Object.entries(multiplayer.name).map(([id, name]) => {
    return {
      key: id,
      name: id === multiplayer.host ? name + " (Host)" : name,
      ...Object.fromEntries(
        Array(previousScoreCount)
          .fill(0)
          .map((i) => [`score${i}`, previousScores[id][i]])
      ),
      [`score${previousScoreCount}`]: scores.get(id),
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
