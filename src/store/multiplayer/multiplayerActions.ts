import {
  AddHostAction,
  AddNameAction,
  MultiplayerActionType,
  MultiplayerState,
  UpdateAction,
} from "./multiplayerTypes";

export const update = (state: MultiplayerState): UpdateAction => ({
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
