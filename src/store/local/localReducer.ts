import { Reducer } from "redux";
import { LocalActionType, LocalState } from "./localTypes";

export const initialState: LocalState = {
  selectedCard: undefined,
};

export const LocalReducer: Reducer<LocalState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LocalActionType.SELECT_CARD:
      const { card } = action;
      return { selectedCard: card };
    case LocalActionType.DESELECT_CARD:
      return { selectedCard: undefined };
    default:
      return state;
  }
};
