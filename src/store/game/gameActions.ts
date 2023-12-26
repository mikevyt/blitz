import {
  GameActionType,
  GameState,
  MoveCardBlitzToExistingDutchPileAction,
  MoveCardBlitzToNewDutchPileAction,
  MoveCardBlitzToNewSpreadPileAction,
  MoveCardSpreadToExistingDutchPileAction,
  MoveCardSpreadToExistingSpreadPileAction,
  MoveCardSpreadToNewDutchPileAction,
  MoveCardStashToExistingDutchPileAction,
  MoveCardStashToNewDutchPileAction,
  UpdateGameAction,
  UpdateStashAction,
} from "./gameTypes";
import { PlayingCard } from "../../types/PlayingCard";

export const updateGame = (state: GameState): UpdateGameAction => ({
  type: GameActionType.UPDATE_GAME,
  state,
});

export const updateStash = (id: string, index: number): UpdateStashAction => ({
  type: GameActionType.UPDATE_WOOD,
  id,
  index,
});

export const moveCardSpreadToNewDutchPile = (
  id: string,
  startingCard: PlayingCard
): MoveCardSpreadToNewDutchPileAction => ({
  type: GameActionType.MOVE_CARD_POST_TO_NEW_DUTCH_PILE,
  id,
  startingCard,
});

export const moveCardSpreadToExistingDutchPile = (
  id: string,
  startingCard: PlayingCard,
  destinationCard: PlayingCard
): MoveCardSpreadToExistingDutchPileAction => ({
  type: GameActionType.MOVE_CARD_POST_TO_EXISTING_DUTCH_PILE,
  id,
  startingCard,
  destinationCard,
});

export const moveCardSpreadToExistingSpreadPile = (
  id: string,
  startingCard: PlayingCard,
  destinationCard: PlayingCard
): MoveCardSpreadToExistingSpreadPileAction => ({
  type: GameActionType.MOVE_CARD_POST_TO_EXISTING_POST_PILE,
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

export const moveCardStashToNewDutchPile = (
  id: string,
  startingCard: PlayingCard
): MoveCardStashToNewDutchPileAction => ({
  type: GameActionType.MOVE_CARD_WOOD_TO_NEW_DUTCH_PILE,
  id,
  startingCard,
});

export const moveCardStashToExistingDutchPile = (
  id: string,
  startingCard: PlayingCard,
  destinationCard: PlayingCard
): MoveCardStashToExistingDutchPileAction => ({
  type: GameActionType.MOVE_CARD_WOOD_TO_EXISTING_DUTCH_PILE,
  id,
  startingCard,
  destinationCard,
});

export const moveCardBlitzToNewSpreadPile = (
  id: string,
  startingCard: PlayingCard
): MoveCardBlitzToNewSpreadPileAction => ({
  type: GameActionType.MOVE_CARD_BLITZ_TO_NEW_POST_PILE,
  id,
  startingCard,
});
