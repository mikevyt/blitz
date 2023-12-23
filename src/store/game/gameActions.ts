import {
  GameActionType,
  MoveCardBlitzToExistingDutchPileAction,
  MoveCardBlitzToNewDutchPileAction,
  MoveCardBlitzToNewPostPileAction,
  MoveCardPostToExistingDutchPileAction,
  MoveCardPostToNewDutchPileAction,
  MoveCardWoodToExistingDutchPileAction,
  MoveCardWoodToNewDutchPileAction,
  UpdateWoodAction,
} from "./gameTypes";
import { PlayingCard } from "../../types/PlayingCard";

export const updateWood = (id: string, index: number): UpdateWoodAction => ({
  type: GameActionType.UPDATE_WOOD,
  id,
  index,
});

export const moveCardPostToNewDutchPile = (
  id: string,
  startingCard: PlayingCard
): MoveCardPostToNewDutchPileAction => ({
  type: GameActionType.MOVE_CARD_POST_TO_NEW_DUTCH_PILE,
  id,
  startingCard,
});

export const moveCardPostToExistingDutchPile = (
  id: string,
  startingCard: PlayingCard,
  destinationCard: PlayingCard
): MoveCardPostToExistingDutchPileAction => ({
  type: GameActionType.MOVE_CARD_POST_TO_EXISTING_DUTCH_PILE,
  id,
  startingCard,
  destinationCard,
});

export const moveCardBlitzToNewDutchPile = (
  id: string,
  startingCard: PlayingCard
): MoveCardBlitzToNewDutchPileAction => ({
  type: GameActionType.MOVE_CARD_BLITZ_TO_NEW_DUTCH_PILE,
  id,
  startingCard,
});

export const moveCardBlitzToExistingDutchPile = (
  id: string,
  startingCard: PlayingCard,
  destinationCard: PlayingCard
): MoveCardBlitzToExistingDutchPileAction => ({
  type: GameActionType.MOVE_CARD_BLITZ_TO_EXISTING_DUTCH_PILE,
  id,
  startingCard,
  destinationCard,
});

export const moveCardWoodToNewDutchPile = (
  id: string,
  startingCard: PlayingCard
): MoveCardWoodToNewDutchPileAction => ({
  type: GameActionType.MOVE_CARD_WOOD_TO_NEW_DUTCH_PILE,
  id,
  startingCard,
});

export const moveCardWoodToExistingDutchPile = (
  id: string,
  startingCard: PlayingCard,
  destinationCard: PlayingCard
): MoveCardWoodToExistingDutchPileAction => ({
  type: GameActionType.MOVE_CARD_WOOD_TO_EXISTING_DUTCH_PILE,
  id,
  startingCard,
  destinationCard,
});

export const moveCardBlitzToNewPostPile = (
  id: string,
  startingCard: PlayingCard
): MoveCardBlitzToNewPostPileAction => ({
  type: GameActionType.MOVE_CARD_BLITZ_TO_NEW_POST_PILE,
  id,
  startingCard,
});
