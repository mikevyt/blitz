import { Reducer } from "redux";
import { moveCardSpreadToExistingCenterPileReducer } from "./gameReducers/moveCardSpreadToExistingCenterPileReducer";
import { moveCardSpreadToExistingSpreadPileReducer } from "./gameReducers/moveCardSpreadToExistingSpreadPileReducer";
import { moveCardSpreadToNewCenterPileReducer } from "./gameReducers/moveCardSpreadToNewCenterPileReducer";
import { moveCardStackToExistingCenterPileReducer } from "./gameReducers/moveCardStackToExistingCenterPileReducer";
import { moveCardStackToNewCenterPileReducer } from "./gameReducers/moveCardStackToNewCenterPileReducer";
import { moveCardStackToNewSpreadPileReducer } from "./gameReducers/moveCardStackToNewSpreadPileReducer";
import { moveCardStashToExistingCenterPileReducer } from "./gameReducers/moveCardStashToExistingCenterPileReducer";
import { moveCardStashToNewCenterPileReducer } from "./gameReducers/moveCardStashToNewCenterPileReducer";
import { updateGameReducer } from "./gameReducers/updateGameReducer";
import { updateStashReducer } from "./gameReducers/updateStashReducer";
import { GameAction, GameActionType, GameState } from "./gameTypes";

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
    case GameActionType.MOVE_CARD_SPREAD_TO_NEW_CENTER_PILE:
      return moveCardSpreadToNewCenterPileReducer(state, action);
    case GameActionType.MOVE_CARD_SPREAD_TO_EXISTING_CENTER_PILE:
      return moveCardSpreadToExistingCenterPileReducer(state, action);
    case GameActionType.MOVE_CARD_SPREAD_TO_EXISTING_SPREAD_PILE:
      return moveCardSpreadToExistingSpreadPileReducer(state, action);
    case GameActionType.MOVE_CARD_STACK_TO_NEW_CENTER_PILE:
      return moveCardStackToNewCenterPileReducer(state, action);
    case GameActionType.MOVE_CARD_STACK_TO_EXISTING_CENTER_PILE:
      return moveCardStackToExistingCenterPileReducer(state, action);
    case GameActionType.MOVE_CARD_STACK_TO_NEW_SPREAD_PILE:
      return moveCardStackToNewSpreadPileReducer(state, action);
    case GameActionType.MOVE_CARD_STASH_TO_NEW_CENTER_PILE:
      return moveCardStashToNewCenterPileReducer(state, action);
    case GameActionType.MOVE_CARD_STASH_TO_EXISTING_CENTER_PILE:
      return moveCardStashToExistingCenterPileReducer(state, action);
    case GameActionType.UPDATE_STASH:
      return updateStashReducer(state, action);
    case GameActionType.UPDATE_GAME:
      return updateGameReducer(state, action);
    default:
      return state;
  }
};
