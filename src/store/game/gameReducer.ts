import { AnyAction, Reducer } from "redux";
import { GameActionType, GameState } from "./gameTypes";
import { isEqual } from "../../types/PlayingCard";
import { setUpGameState } from "../../helpers/setUpGameState";

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

const moveCardPostToNewDutchPileReducer = (
  state: GameState,
  action: AnyAction
) => {
  const { id, startingCard } = action;
  const dutch = [...(state.dutch || [[]])];
  dutch.push([startingCard]);
  const post = { ...state.post };
  post[id] = [...state.post[id]];
  for (let i = 0; i < post[id].length; i++) {
    if (isEqual(post[id][i], startingCard)) post[id].splice(i, 1);
  }

  return { ...state, dutch, post };
};

const moveCardPostToExistingDutchPileReducer = (
  state: GameState,
  action: AnyAction
) => {
  const { id, startingCard, destinationCard } = action;
  const dutch = [...(state.dutch || [[]])];
  for (let i = 0; i < dutch.length; i++) {
    for (let j = 0; j < dutch[i].length; j++) {
      if (isEqual(dutch[i][j], destinationCard)) {
        dutch[i].push(startingCard);
      }
    }
  }
  const post = { ...state.post };
  post[id] = [...state.post[id]];
  for (let i = 0; i < post[id].length; i++) {
    if (isEqual(post[id][i], startingCard)) post[id].splice(i, 1);
  }

  return { ...state, dutch, post };
};

const moveCardBlitzToNewDutchPileReducer = (
  state: GameState,
  action: AnyAction
) => {
  const { id, startingCard } = action;
  const dutch = [...(state.dutch || [[]])];
  dutch.push([startingCard]);
  const blitz = { ...state.blitz };
  blitz[id] = [...state.blitz[id]];
  for (let i = 0; i < blitz[id].length; i++) {
    if (isEqual(blitz[id][i], startingCard)) blitz[id].splice(i, 1);
  }

  return { ...state, dutch, blitz };
};

const moveCardBlitzToExistingDutchPileReducer = (
  state: GameState,
  action: AnyAction
) => {
  const { id, startingCard, destinationCard } = action;
  const dutch = [...(state.dutch || [[]])];
  for (let i = 0; i < dutch.length; i++) {
    for (let j = 0; j < dutch[i].length; j++) {
      if (isEqual(dutch[i][j], destinationCard)) {
        dutch[i].push(startingCard);
      }
    }
  }
  const blitz = { ...state.blitz };
  blitz[id] = [...state.blitz[id]];
  for (let i = 0; i < blitz[id].length; i++) {
    if (isEqual(blitz[id][i], startingCard)) blitz[id].splice(i, 1);
  }

  return { ...state, dutch, blitz };
};

const moveCardWoodToNewDutchPileReducer = (
  state: GameState,
  action: AnyAction
) => {
  const { id, startingCard } = action;
  const dutch = [...(state.dutch || [[]])];
  dutch.push([startingCard]);
  const wood = { ...state.wood };
  wood[id] = [...state.wood[id]];
  for (let i = 0; i < wood[id].length; i++) {
    if (isEqual(wood[id][i], startingCard)) wood[id].splice(i, 1);
  }

  return { ...state, dutch, wood };
};

const moveCardWoodToExistingDutchPileReducer = (
  state: GameState,
  action: AnyAction
) => {
  const { id, startingCard, destinationCard } = action;
  const dutch = [...(state.dutch || [[]])];
  for (let i = 0; i < dutch.length; i++) {
    for (let j = 0; j < dutch[i].length; j++) {
      if (isEqual(dutch[i][j], destinationCard)) {
        dutch[i].push(startingCard);
      }
    }
  }
  const wood = { ...state.wood };
  wood[id] = [...state.wood[id]];
  for (let i = 0; i < wood[id].length; i++) {
    if (isEqual(wood[id][i], startingCard)) wood[id].splice(i, 1);
  }

  return { ...state, dutch, wood };
};

const updateWoodReducer = (state: GameState, action: AnyAction) => {
  const { index } = action;
  return {
    ...state,
    woodVisible: { ...state.woodVisible, [action.id]: index },
  };
};
