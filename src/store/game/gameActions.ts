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

export const moveCardPostToExistingDutchPile = (
  id: string,
  startingCard: PlayingCard,
  destinationCard: PlayingCard
) => ({
  type: GameActionType.MOVE_CARD_POST_TO_EXISTING_DUTCH_PILE,
  id,
  startingCard,
  destinationCard,
});

export const moveCardBlitzToNewDutchPile = (
  id: string,
  startingCard: PlayingCard
) => ({
  type: GameActionType.MOVE_CARD_BLITZ_TO_NEW_DUTCH_PILE,
  id,
  startingCard,
});

export const moveCardBlitzToExistingDutchPile = (
  id: string,
  startingCard: PlayingCard,
  destinationCard: PlayingCard
) => ({
  type: GameActionType.MOVE_CARD_BLITZ_TO_EXISTING_DUTCH_PILE,
  id,
  startingCard,
  destinationCard,
});

export const moveCardWoodToNewDutchPile = (
  id: string,
  startingCard: PlayingCard
) => ({
  type: GameActionType.MOVE_CARD_WOOD_TO_NEW_DUTCH_PILE,
  id,
  startingCard,
});

export const moveCardWoodToExistingDutchPile = (
  id: string,
  startingCard: PlayingCard,
  destinationCard: PlayingCard
) => ({
  type: GameActionType.MOVE_CARD_WOOD_TO_EXISTING_DUTCH_PILE,
  id,
  startingCard,
  destinationCard,
});
