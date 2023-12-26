import { Reducer } from "redux";
import { GameAction, GameActionType, GameState } from "./gameTypes";
import { moveCardSpreadToNewCenterPileReducer } from "./gameReducers/moveCardSpreadToNewCenterPileReducer";
import { moveCardSpreadToExistingCenterPileReducer } from "./gameReducers/moveCardSpreadToExistingCenterPileReducer";
import { moveCardStackToNewCenterPileReducer } from "./gameReducers/moveCardStackToNewCenterPileReducer";
import { moveCardStackToExistingCenterPileReducer } from "./gameReducers/moveCardStackToExistingCenterPileReducer";
import { moveCardStackToNewSpreadPileReducer } from "./gameReducers/moveCardStackToNewSpreadPileReducer";
import { moveCardStashToNewCenterPileReducer } from "./gameReducers/moveCardStashToNewCenterPileReducer";
import { moveCardStashToExistingCenterPileReducer } from "./gameReducers/moveCardStashToExistingCenterPileReducer";
import { updateStashReducer } from "./gameReducers/updateStashReducer";
import { updateGameReducer } from "./gameReducers/updateGameReducer";
import { moveCardSpreadToExistingSpreadPileReducer } from "./gameReducers/moveCardSpreadToExistingSpreadPileReducer";

export const initialState: GameState = {
  center: [],
  spread: {},
  stack: {},
  stash: {},
  stashVisible: {},
};

export const GameReducer: Reducer<GameState, GameAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GameActionType.MOVE_CARD_POST_TO_NEW_DUTCH_PILE:
      return moveCardSpreadToNewCenterPileReducer(state, action);
    case GameActionType.MOVE_CARD_POST_TO_EXISTING_DUTCH_PILE:
      return moveCardSpreadToExistingCenterPileReducer(state, action);
    case GameActionType.MOVE_CARD_POST_TO_EXISTING_POST_PILE:
      return moveCardSpreadToExistingSpreadPileReducer(state, action);
    case GameActionType.MOVE_CARD_BLITZ_TO_NEW_DUTCH_PILE:
      return moveCardStackToNewCenterPileReducer(state, action);
    case GameActionType.MOVE_CARD_BLITZ_TO_EXISTING_DUTCH_PILE:
      return moveCardStackToExistingCenterPileReducer(state, action);
    case GameActionType.MOVE_CARD_BLITZ_TO_NEW_POST_PILE:
      return moveCardStackToNewSpreadPileReducer(state, action);
    case GameActionType.MOVE_CARD_WOOD_TO_NEW_DUTCH_PILE:
      return moveCardStashToNewCenterPileReducer(state, action);
    case GameActionType.MOVE_CARD_WOOD_TO_EXISTING_DUTCH_PILE:
      return moveCardStashToExistingCenterPileReducer(state, action);
    case GameActionType.UPDATE_WOOD:
      return updateStashReducer(state, action);
    case GameActionType.UPDATE_GAME:
      return updateGameReducer(state, action);
    default:
      return state;
  }
};
