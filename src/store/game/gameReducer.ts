import { Reducer } from "redux";
import { GameAction, GameActionType, GameState } from "./gameTypes";
import { moveCardSpreadToNewDutchPileReducer } from "./gameReducers/moveCardSpreadToNewDutchPileReducer";
import { moveCardSpreadToExistingDutchPileReducer } from "./gameReducers/moveCardSpreadToExistingDutchPileReducer";
import { moveCardBlitzToNewDutchPileReducer } from "./gameReducers/moveCardBlitzToNewDutchPileReducer";
import { moveCardBlitzToExistingDutchPileReducer } from "./gameReducers/moveCardBlitzToExistingDutchPileReducer";
import { moveCardBlitzToNewSpreadPileReducer } from "./gameReducers/moveCardBlitzToNewSpreadPileReducer";
import { moveCardStashToNewDutchPileReducer } from "./gameReducers/moveCardStashToNewDutchPileReducer";
import { moveCardStashToExistingDutchPileReducer } from "./gameReducers/moveCardStashToExistingDutchPileReducer";
import { updateStashReducer } from "./gameReducers/updateStashReducer";
import { updateGameReducer } from "./gameReducers/updateGameReducer";
import { moveCardSpreadToExistingSpreadPileReducer } from "./gameReducers/moveCardSpreadToExistingSpreadPileReducer";

export const initialState: GameState = {
  dutch: [],
  post: {},
  blitz: {},
  wood: {},
  woodVisible: {},
};

export const GameReducer: Reducer<GameState, GameAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GameActionType.MOVE_CARD_POST_TO_NEW_DUTCH_PILE:
      return moveCardSpreadToNewDutchPileReducer(state, action);
    case GameActionType.MOVE_CARD_POST_TO_EXISTING_DUTCH_PILE:
      return moveCardSpreadToExistingDutchPileReducer(state, action);
    case GameActionType.MOVE_CARD_POST_TO_EXISTING_POST_PILE:
      return moveCardSpreadToExistingSpreadPileReducer(state, action);
    case GameActionType.MOVE_CARD_BLITZ_TO_NEW_DUTCH_PILE:
      return moveCardBlitzToNewDutchPileReducer(state, action);
    case GameActionType.MOVE_CARD_BLITZ_TO_EXISTING_DUTCH_PILE:
      return moveCardBlitzToExistingDutchPileReducer(state, action);
    case GameActionType.MOVE_CARD_BLITZ_TO_NEW_POST_PILE:
      return moveCardBlitzToNewSpreadPileReducer(state, action);
    case GameActionType.MOVE_CARD_WOOD_TO_NEW_DUTCH_PILE:
      return moveCardStashToNewDutchPileReducer(state, action);
    case GameActionType.MOVE_CARD_WOOD_TO_EXISTING_DUTCH_PILE:
      return moveCardStashToExistingDutchPileReducer(state, action);
    case GameActionType.UPDATE_WOOD:
      return updateStashReducer(state, action);
    case GameActionType.UPDATE_GAME:
      return updateGameReducer(state, action);
    default:
      return state;
  }
};
