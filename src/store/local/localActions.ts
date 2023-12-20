import { LocalActionType } from "./localTypes";
import { PlayingCard } from "../../types/PlayingCard";

export const selectCard = (card: PlayingCard) => ({
  type: LocalActionType.SELECT_CARD,
  card,
});

export const deselectCard = () => ({
  type: LocalActionType.DESELECT_CARD,
});
