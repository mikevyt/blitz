import { Reducer } from "redux";
import { GameAction, GameActionType, GameState } from "./gameTypes";
import { setUpGameState } from "../../helpers/setUpGameState";
import { moveCardPostToNewDutchPileReducer } from "./gameReducers/moveCardPostToNewDutchPileReducer";
import { moveCardPostToExistingDutchPileReducer } from "./gameReducers/moveCardPostToExistingDutchPileReducer";
import { moveCardBlitzToNewDutchPileReducer } from "./gameReducers/moveCardBlitzToNewDutchPileReducer";
import { moveCardBlitzToExistingDutchPileReducer } from "./gameReducers/moveCardBlitzToExistingDutchPileReducer";
import { moveCardBlitzToNewPostPileReducer } from "./gameReducers/moveCardBlitzToNewPostPileReducer";
import { moveCardWoodToNewDutchPileReducer } from "./gameReducers/moveCardWoodToNewDutchPileReducer";
import { moveCardWoodToExistingDutchPileReducer } from "./gameReducers/moveCardWoodToExistingDutchPileReducer";
import { updateWoodReducer } from "./gameReducers/updateWoodReducer";

export const initialState: GameState = setUpGameState();

export const GameReducer: Reducer<GameState, GameAction> = (
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
