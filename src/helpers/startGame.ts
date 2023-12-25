import { Dispatch } from "redux";
import { setUpGameState } from "./setUpGameState";
import { merge } from "lodash";
import { updateGame } from "../store/game/gameActions";
import { GameState } from "../store/game/gameTypes";
import { startGame as startGameAction } from "../store/multiplayer/multiplayerActions";
import { PeerConnection } from "./peer";

export const startGame = (dispatch: Dispatch, ids: string[]) => {
  const state: GameState = {
    dutch: [],
    post: {},
    blitz: {},
    wood: {},
    woodVisible: {},
  };
  ids.forEach((id) => {
    const playerState = setUpGameState(id);
    merge(state, playerState);
  });
  // console.log({ state });
  dispatch(updateGame(state));
  dispatch(startGameAction());
  // PeerConnection.sendConnection()
};
