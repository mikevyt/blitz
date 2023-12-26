import {
  GameActionType,
  GameState,
  MoveCardStackToExistingCenterPileAction,
  MoveCardStackToNewCenterPileAction,
  MoveCardStackToNewSpreadPileAction,
  MoveCardSpreadToExistingCenterPileAction,
  MoveCardSpreadToExistingSpreadPileAction,
  MoveCardSpreadToNewCenterPileAction,
  MoveCardStashToExistingCenterPileAction,
  MoveCardStashToNewCenterPileAction,
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

export const moveCardSpreadToNewCenterPile = (
  id: string,
  startingCard: PlayingCard
): MoveCardSpreadToNewCenterPileAction => ({
  type: GameActionType.MOVE_CARD_POST_TO_NEW_DUTCH_PILE,
  id,
  startingCard,
});

export const moveCardSpreadToExistingCenterPile = (
  id: string,
  startingCard: PlayingCard,
  destinationCard: PlayingCard
): MoveCardSpreadToExistingCenterPileAction => ({
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

export const moveCardStackToNewCenterPile = (
  id: string,
  startingCard: PlayingCard
): MoveCardStackToNewCenterPileAction => ({
  type: GameActionType.MOVE_CARD_BLITZ_TO_NEW_DUTCH_PILE,
  id,
  startingCard,
});

export const moveCardStackToExistingCenterPile = (
  id: string,
  startingCard: PlayingCard,
  destinationCard: PlayingCard
): MoveCardStackToExistingCenterPileAction => ({
  type: GameActionType.MOVE_CARD_BLITZ_TO_EXISTING_DUTCH_PILE,
  id,
  startingCard,
  destinationCard,
});

export const moveCardStashToNewCenterPile = (
  id: string,
  startingCard: PlayingCard
): MoveCardStashToNewCenterPileAction => ({
  type: GameActionType.MOVE_CARD_WOOD_TO_NEW_DUTCH_PILE,
  id,
  startingCard,
});

export const moveCardStashToExistingCenterPile = (
  id: string,
  startingCard: PlayingCard,
  destinationCard: PlayingCard
): MoveCardStashToExistingCenterPileAction => ({
  type: GameActionType.MOVE_CARD_WOOD_TO_EXISTING_DUTCH_PILE,
  id,
  startingCard,
  destinationCard,
});

export const moveCardStackToNewSpreadPile = (
  id: string,
  startingCard: PlayingCard
): MoveCardStackToNewSpreadPileAction => ({
  type: GameActionType.MOVE_CARD_BLITZ_TO_NEW_POST_PILE,
  id,
  startingCard,
});
