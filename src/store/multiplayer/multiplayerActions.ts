import {
  AddEmojiAction,
  AddHostAction,
  AddNameAction,
  EndGameAction,
  EndRoundAction,
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

export const addEmoji = (id: string, emoji: string): AddEmojiAction => ({
  type: MultiplayerActionType.ADD_EMOJI,
  id,
  emoji,
});

export const addHost = (id: string): AddHostAction => ({
  type: MultiplayerActionType.ADD_HOST,
  id,
});

export const startGame = (): StartGameAction => ({
  type: MultiplayerActionType.START_GAME,
});

export const endRound = (): EndRoundAction => ({
  type: MultiplayerActionType.END_ROUND,
});

export const endGame = (): EndGameAction => ({
  type: MultiplayerActionType.END_GAME,
});
