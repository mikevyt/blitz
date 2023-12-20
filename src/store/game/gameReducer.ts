import { Reducer } from "redux";
import { GameActionType, GameState } from "./gameTypes";

export const initialState: GameState = {
  selectedCard: undefined,
};

export const GameReducer: Reducer<GameState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GameActionType.SELECT_CARD:
      const { card } = action;
      return { selectedCard: card };
    case GameActionType.DESELECT_CARD:
      return { selectedCard: undefined };
    default:
      return state;
  }
};
