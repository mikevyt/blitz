import { GameActionType } from "./gameTypes";
import { PlayingCard } from "../../types/PlayingCard";

export const updateWood = (id: string, index: number) => ({
  type: GameActionType.UPDATE_WOOD,
  id,
  index,
});

export const moveCardPostToNewDutchPile = (
  id: string,
  startingCard: PlayingCard
) => ({
  type: GameActionType.MOVE_CARD_POST_TO_NEW_DUTCH_PILE,
  id,
  startingCard,
});
