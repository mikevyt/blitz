import React from "react";
import { useAppSelector } from "../../store/hooks";
import { CenterArea } from "../CenterArea";
import { PlayingCardArea } from "../PlayingCardArea";
import { StartScreen } from "../StartScreen";
import { TopOpponentCardArea } from "../TopOpponentCardArea";

export const App: React.FC = () => {
  const gameState = useAppSelector((state) => state.game);
  const peer = useAppSelector((state) => state.peer);
  const multiplayer = useAppSelector((state) => state.multiplayer);
  const otherPlayerIds = Object.keys(multiplayer.name).filter(
    (id) => id !== peer.id
  );
  const [player1, player2, player3] = otherPlayerIds;

  return (
    <div
      style={{
        width: "100vw" /* Make content full-width */,
        height: "100vh" /* Make content full-height */,
        overflowY: "auto" /* Enable vertical scrolling within the content */,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      {multiplayer.gameStatus === "NOT_STARTED" ? (
        <StartScreen />
      ) : (
        <>
          {player1 && <TopOpponentCardArea id={player1} />}
          {/* {player2 && <TopOpponentCardArea id={player2} />}
          {player3 && <TopOpponentCardArea id={player3} />} */}
          <CenterArea />
          <PlayingCardArea />
        </>
      )}
    </div>
  );
};

export default App;
