import { Reducer } from "redux";
import { GameActionType, GameState } from "./gameTypes";
import { setUpGameState } from "../../helpers/setUpGameState";
import { moveCardPostToNewDutchPileReducer } from "./moveCardPostToNewDutchPileReducer";
import { moveCardPostToExistingDutchPileReducer } from "./moveCardPostToExistingDutchPileReducer";
import { moveCardBlitzToNewDutchPileReducer } from "./moveCardBlitzToNewDutchPileReducer";
import { moveCardBlitzToExistingDutchPileReducer } from "./moveCardBlitzToExistingDutchPileReducer";
import { moveCardBlitzToNewPostPileReducer } from "./moveCardBlitzToNewPostPileReducer";
import { moveCardWoodToNewDutchPileReducer } from "./moveCardWoodToNewDutchPileReducer";
import { moveCardWoodToExistingDutchPileReducer } from "./moveCardWoodToExistingDutchPileReducer";
import { updateWoodReducer } from "./updateWoodReducer";

export const initialState: GameState = setUpGameState();

export const GameReducer: Reducer<GameState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GameActionType.MOVE_CARD_POST_TO_NEW_DUTCH_PILE:
      return moveCardPostToNewDutchPileReducer(state, action);
    case GameActionType.MOVE_CARD_POST_TO_EXISTING_DUTCH_PILE:
      return moveCardPostToExistingDutchPileReducer(state, action);
    case GameActionType.MOVE_CARD_BLITZ_TO_NEW_DUTCH_PILE:
      return moveCardBlitzToNewDutchPileReducer(state, action);
    case GameActionType.MOVE_CARD_BLITZ_TO_EXISTING_DUTCH_PILE:
      return moveCardBlitzToExistingDutchPileReducer(state, action);
    case GameActionType.MOVE_CARD_BLITZ_TO_NEW_POST_PILE:
      return moveCardBlitzToNewPostPileReducer(state, action);
    case GameActionType.MOVE_CARD_WOOD_TO_NEW_DUTCH_PILE:
      return moveCardWoodToNewDutchPileReducer(state, action);
    case GameActionType.MOVE_CARD_WOOD_TO_EXISTING_DUTCH_PILE:
      return moveCardWoodToExistingDutchPileReducer(state, action);
    case GameActionType.UPDATE_WOOD:
      return updateWoodReducer(state, action);
    default:
      return state;
  }
};
