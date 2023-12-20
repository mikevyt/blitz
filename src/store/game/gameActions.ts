import { GameActionType } from "./gameTypes";
import { PlayingCard } from "../../types/PlayingCard";

export const selectCard = (card: PlayingCard) => ({
  type: GameActionType.SELECT_CARD,
  card,
});

export const deselectCard = () => ({
  type: GameActionType.DESELECT_CARD,
});
