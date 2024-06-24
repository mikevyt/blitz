import { useAppSelector } from "../../store/hooks";
import { GameScreen } from "../GameScreen";
import { RoundEndScreen } from "../RoundEndScreen";
import { StartScreen } from "../StartScreen";

export const MainContent = () => {
  const multiplayer = useAppSelector((state) => state.multiplayer);

  switch (multiplayer.gameStatus) {
    case "NOT_STARTED":
      return <StartScreen />;
    case "ROUND_STARTED":
      return <GameScreen />;
    case "ROUND_ENDED":
    case "ENDED":
      return <RoundEndScreen />;
    default:
      return null;
  }
};
