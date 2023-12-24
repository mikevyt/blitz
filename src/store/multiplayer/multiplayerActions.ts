import { AddNameAction, MultiplayerActionType } from "./multiplayerTypes";

export const addName = (id: string, name: string): AddNameAction => ({
  type: MultiplayerActionType.ADD_NAME,
  id,
  name,
});
