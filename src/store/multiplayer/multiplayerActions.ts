import {
  AddHostAction,
  AddNameAction,
  MultiplayerActionType,
  MultiplayerState,
  StartGameAction,
  UpdateAction,
} from "./multiplayerTypes";

export const updateMultiplayer = (state: MultiplayerState): UpdateAction => ({
  type: MultiplayerActionType.UPDATE,
  state,
});

export const addName = (id: string, name: string): AddNameAction => ({
  type: MultiplayerActionType.ADD_NAME,
  id,
  name,
});

export const addHost = (id: string): AddHostAction => ({
  type: MultiplayerActionType.ADD_HOST,
  id,
});

export const startGame = (): StartGameAction => ({
  type: MultiplayerActionType.START_GAME,
});
