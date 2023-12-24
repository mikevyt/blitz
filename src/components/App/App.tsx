import React from "react";
import { Button, Form, Input, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { startPeer, stopPeerSession } from "../../store/peer/peerActions";
import * as connectionAction from "../../store/connection/connectionActions";
import { PeerConnection } from "../../helpers/peer";
import { setUpPlayer } from "../../helpers/setUpPlayer";
import { shuffle } from "../../helpers/shuffle";
import { PlayingCard } from "../PlayingCard";
import { CenterArea } from "../CenterArea";
import { PlayingCardArea } from "../PlayingCardArea";
import { generateCards } from "../../helpers/generateCards";
import { StartScreen } from "../StartScreen";

export const App: React.FC = () => {
  const gameState = useAppSelector((state) => state.game);
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
      <StartScreen />
      {/* <CenterArea />
      <PlayingCardArea /> */}
    </div>
  );
};

export default App;
