import React from "react";
import { useAppSelector } from "../../store/hooks";
import { CenterArea } from "../CenterArea";
import { PlayingCardArea } from "../PlayingCardArea";
import { StartScreen } from "../StartScreen";

export const App: React.FC = () => {
  const gameState = useAppSelector((state) => state.game);
  const multiplayer = useAppSelector((state) => state.multiplayer);
  console.log({ gameState });

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
          <CenterArea />
          <PlayingCardArea />
        </>
      )}
    </div>
  );
};

export default App;
