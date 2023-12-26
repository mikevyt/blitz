import { Dispatch } from "redux";
import { setUpGameState } from "./setUpGameState";
import { merge } from "lodash";
import { updateGame } from "../store/game/gameActions";
import { GameState } from "../store/game/gameTypes";
import { startGame as startGameAction } from "../store/multiplayer/multiplayerActions";
import { PeerConnection } from "./peer";

export const startGame = (dispatch: Dispatch, ownId: string, ids: string[]) => {
  const state: GameState = {
    center: [],
    spread: {},
    blitz: {},
    wood: {},
    woodVisible: {},
  };
  ids.forEach((id) => {
    const playerState = setUpGameState(id);
    merge(state, playerState);
  });
  dispatch(updateGame(state));
  dispatch(startGameAction());
  ids.forEach(async (id) => {
    if (id !== ownId) {
      PeerConnection.sendConnection(id, updateGame(state));
      PeerConnection.sendConnection(id, startGameAction());
    }
  });
};
