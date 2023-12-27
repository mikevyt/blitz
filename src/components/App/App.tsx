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
          {otherPlayerIds.length > 0 && (
            <TopOpponentCardArea id={otherPlayerIds[0]} />
          )}
          {/* TODO: 1, 2 on sides */}
          <CenterArea />
          <PlayingCardArea />
        </>
      )}
    </div>
  );
};

export default App;
