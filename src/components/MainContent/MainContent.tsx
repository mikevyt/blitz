import { useAppSelector } from "../../store/hooks";
import { CenterArea } from "../CenterArea";
import { EndScreen } from "../EndScreen";
import { PlayingCardArea } from "../PlayingCardArea";
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
    case "STARTED":
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

    case "ENDED":
      return <EndScreen />;
  }
};
