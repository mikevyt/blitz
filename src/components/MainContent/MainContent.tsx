import { useAppSelector } from "../../store/hooks";
import { CenterArea } from "../CenterArea";
import { PlayingCardArea } from "../PlayingCardArea";
import { RoundEndScreen } from "../RoundEndScreen";
import { SideOpponentCardArea } from "../SideOpponentCardArea";
import { StartScreen } from "../StartScreen";
import { TopOpponentCardArea } from "../TopOpponentCardArea";

export const MainContent = () => {
  const peer = useAppSelector((state) => state.peer);
  const multiplayer = useAppSelector((state) => state.multiplayer);
  const otherPlayerIds = Object.keys(multiplayer.name).filter(
    (id) => id !== peer.id
  );
  const [player1, player2, player3] = otherPlayerIds;

  switch (multiplayer.gameStatus) {
    case "NOT_STARTED":
      return <StartScreen />;
    case "ROUND_STARTED":
      return (
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
      );
    case "ROUND_ENDED":
      return <RoundEndScreen />;
    default:
      return null;
  }
};
