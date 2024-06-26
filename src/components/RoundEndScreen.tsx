import { Button, Card, Table } from "antd";
import { calculateScores } from "../helpers/calculateScores";
import { startGame } from "../helpers/startGame";
import { useAppEmit } from "../helpers/useAppEmit";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addPreviousScores,
  endGame,
} from "../store/multiplayer/multiplayerActions";

export const RoundEndScreen = () => {
  const emit = useAppEmit();
  const dispatch = useAppDispatch();
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
    // set previous scores
    await emit(addPreviousScores(scores));
    startGame(
      dispatch,
      peer.id!,
      Object.entries(multiplayer.name).map(([id, _]) => id)
    );
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
