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

const moveCardPostToNewDutchPileReducer = (
  state: GameState,
  action: AnyAction
) => {
  const { id, startingCard } = action;
  const dutch = [...(state.dutch || [[]])];
  dutch.push([{ ...startingCard, location: "dutch" }]);
  const post: GameState["post"] = {
    ...state.post,
    [id]: state.post[id].filter((card) => !isEqual(card, startingCard)),
  };

  return { ...state, dutch, post };
};

const moveCardPostToExistingDutchPileReducer = (
  state: GameState,
  action: AnyAction
) => {
  const { id, startingCard, destinationCard } = action;
  const dutch = state.dutch.map((row) => [...row]);
  for (let i = 0; i < dutch.length; i++) {
    for (let j = 0; j < dutch[i].length; j++) {
      if (isEqual(dutch[i][j], destinationCard)) {
        dutch[i].push({ ...startingCard, location: "dutch" });
      }
    }
  }

  const post: GameState["post"] = {
    ...state.post,
    [id]: state.post[id].filter((card) => !isEqual(card, startingCard)),
  };

  return { ...state, dutch, post };
};

const moveCardBlitzToNewDutchPileReducer = (
  state: GameState,
  action: AnyAction
) => {
  const { id, startingCard } = action;
  const dutch = [...(state.dutch || [[]])];
  dutch.push([{ ...startingCard, location: "dutch" }]);
  const blitz: GameState["blitz"] = {
    ...state.blitz,
    [id]: state.blitz[id].filter((card) => !isEqual(card, startingCard)),
  };

  return { ...state, dutch, blitz };
};

const moveCardBlitzToExistingDutchPileReducer = (
  state: GameState,
  action: AnyAction
) => {
  const { id, startingCard, destinationCard } = action;
  const dutch = state.dutch.map((row) => [...row]);
  for (let i = 0; i < dutch.length; i++) {
    for (let j = 0; j < dutch[i].length; j++) {
      if (isEqual(dutch[i][j], destinationCard)) {
        dutch[i].push({ ...startingCard, location: "dutch" });
      }
    }
  }
  const blitz: GameState["blitz"] = {
    ...state.blitz,
    [id]: state.blitz[id].filter((card) => !isEqual(card, startingCard)),
  };

  return { ...state, dutch, blitz };
};

const moveCardBlitzToNewPostPileReducer = (
  state: GameState,
  action: AnyAction
) => {
  const { id, startingCard } = action;
  const post = { ...state.post, [id]: [...state.post[id], startingCard] };
  const blitz: GameState["blitz"] = {
    ...state.blitz,
    [id]: state.blitz[id].filter((card) => !isEqual(card, startingCard)),
  };

  return { ...state, post, blitz };
};

const moveCardWoodToNewDutchPileReducer = (
  state: GameState,
  action: AnyAction
) => {
  const { id, startingCard } = action;
  const dutch = [...(state.dutch || [[]])];
  dutch.push([{ ...startingCard, location: "dutch" }]);
  const wood: GameState["wood"] = {
    ...state.wood,
    [id]: state.wood[id].filter((card) => !isEqual(card, startingCard)),
  };

  return { ...state, dutch, wood };
};

const moveCardWoodToExistingDutchPileReducer = (
  state: GameState,
  action: AnyAction
) => {
  const { id, startingCard, destinationCard } = action;
  const dutch = state.dutch.map((row) => [...row]);
  for (let i = 0; i < dutch.length; i++) {
    for (let j = 0; j < dutch[i].length; j++) {
      if (isEqual(dutch[i][j], destinationCard)) {
        dutch[i].push({ ...startingCard, location: "dutch" });
      }
    }
  }
  const wood: GameState["wood"] = {
    ...state.wood,
    [id]: state.wood[id].filter((card) => !isEqual(card, startingCard)),
  };

  return { ...state, dutch, wood };
};

const updateWoodReducer = (state: GameState, action: AnyAction) => {
  const { index } = action;
  return {
    ...state,
    woodVisible: { ...state.woodVisible, [action.id]: index },
  };
};
