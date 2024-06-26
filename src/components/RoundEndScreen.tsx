import { Button, Card, Table } from "antd";
import { calculateScores } from "../helpers/calculateScores";
import { useAppEmit } from "../helpers/useAppEmit";
import { useAppSelector } from "../store/hooks";
import { endGame, endRound } from "../store/multiplayer/multiplayerActions";

export const RoundEndScreen = () => {
  const emit = useAppEmit();
  const multiplayer = useAppSelector((state) => state.multiplayer);
  const game = useAppSelector((state) => state.game);
  const scores = calculateScores(game);
  const peer = useAppSelector((state) => state.peer);
  const previousScores = multiplayer.previousScore;
  const previousScoreCount = multiplayer.previousScore[peer.id!]?.length || 0;

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

  const handleEndGame = async () => {
    await emit(endGame());
  };

  const handleNextRound = async () => {
    await emit(endRound());
  };

  return (
    <Card title="PileUp!">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        bordered={true}
      />
      {multiplayer.gameStatus === "ENDED" ? (
        <div>Thanks for playing!</div>
      ) : (
        <div style={{ display: "flex", columnGap: "2rem" }}>
          <Button onClick={handleEndGame}>End Game</Button>
          <Button onClick={handleNextRound}>Next Round</Button>
        </div>
      )}
    </Card>
  );
};
