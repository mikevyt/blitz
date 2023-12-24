import {
  AddHostAction,
  AddNameAction,
  MultiplayerActionType,
} from "./multiplayerTypes";

export const addName = (id: string, name: string): AddNameAction => ({
  type: MultiplayerActionType.ADD_NAME,
  id,
  name,
});

export const addHost = (id: string): AddHostAction => ({
  type: MultiplayerActionType.ADD_HOST,
  id,
});
