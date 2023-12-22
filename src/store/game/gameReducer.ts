import { Reducer } from "redux";
import { GameActionType, GameState } from "./gameTypes";
import { isEqual } from "../../types/PlayingCard";
import { setUpGameState } from "../../helpers/setUpGameState";

export const initialState: GameState = setUpGameState();

export const GameReducer: Reducer<GameState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    // case GameActionType.MOVE_CARD_POST_TO_EXISTING_DUTCH_PILE:
    //   const { startingCard, endingCard } = action;
    //   const dutch = [...(state.dutch || [[]])];
    //   for (let i = 0; i < dutch.length; i++) {
    //     for (let j = 0; j < dutch[i].length; j++) {
    //       if (isEqual(dutch[i][j], endingCard)) {
    //         dutch[i].push(startingCard);
    //       }
    //     }
    //   }
    //   const post = { ...state.post };
    //   for (let i = 0; i < post[id].length; i++) {
    //     if (isEqual(post[id][i], startingCard)) delete post[id][i];
    //   }

    //   return { ...state, dutch, post };
    case GameActionType.MOVE_CARD_POST_TO_NEW_DUTCH_PILE:
      const { startingCard, endingCard } = action;
      const dutch = [...(state.dutch || [[]])];
      dutch.push([startingCard]);
      const post = { ...state.post };
      post[action.id] = [...state.post[action.id]];
      for (let i = 0; i < post[action.id].length; i++) {
        if (isEqual(post[action.id][i], startingCard))
          delete post[action.id][i];
      }

      return { ...state, dutch, post };
    case GameActionType.UPDATE_WOOD:
      const { index } = action;
      return {
        ...state,
        woodVisible: { ...state.woodVisible, [action.id]: index },
      };
    default:
      return state;
  }
};
