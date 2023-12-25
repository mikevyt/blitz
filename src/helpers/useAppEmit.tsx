import { AnyAction } from "redux";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { PeerConnection } from "./peer";
import { updateMultiplayer } from "../store/multiplayer/multiplayerActions";
import { updateGame } from "../store/game/gameActions";
import { store } from "../store";

export const useAppEmit = () => {
  const dispatch = useAppDispatch();
  const multiplayer = useAppSelector((state) => state.multiplayer);
  const connection = useAppSelector((state) => state.connection);
  const peer = useAppSelector((state) => state.peer);
  return async (cb: AnyAction) => {
    if (peer.id! !== multiplayer.host) {
      await PeerConnection.sendConnection(multiplayer.host, cb);
      return;
    }

    dispatch(cb);
    connection.list.forEach(async (id) => {
      const state = store.getState();
      await PeerConnection.sendConnection(
        id,
        updateMultiplayer(state.multiplayer)
      );
      await PeerConnection.sendConnection(id, updateGame(state.game));
    });
  };
};
