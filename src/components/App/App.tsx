import React from "react";
import { useAppSelector } from "../../store/hooks";
import { CenterArea } from "../CenterArea";
import { PlayingCardArea } from "../PlayingCardArea";
import { SideOpponentCardArea } from "../SideOpponentCardArea";
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
        width: "100%" /* Make content full-width */,
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexGrow: 1,
              width: "100%",
              overflowX: "hidden",
            }}
          >
            {player2 && <SideOpponentCardArea id={player2} />}
            <CenterArea />
            {player3 && <SideOpponentCardArea id={player3} />}
          </div>
          <PlayingCardArea />
        </>
      )}
    </div>
  );
};

export default App;
