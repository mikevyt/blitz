import { PeerActionType } from "./peerTypes";
import { Dispatch } from "redux";
import { DataType, PeerConnection } from "../../helpers/peer";
import { message } from "antd";
import {
  addConnectionList,
  removeConnectionList,
} from "../connection/connectionActions";
import download from "js-file-download";
import { addHost, addName, update } from "../multiplayer/multiplayerActions";
import { store } from "..";

export const startPeerSession = (id: string) => ({
  type: PeerActionType.PEER_SESSION_START,
  id,
});

export const stopPeerSession = () => ({
  type: PeerActionType.PEER_SESSION_STOP,
});
export const setLoading = (loading: boolean) => ({
  type: PeerActionType.PEER_LOADING,
  loading,
});

export const createPeer: ({
  name,
  isHost,
}: {
  name: string;
  isHost: boolean;
}) => (dispatch: Dispatch) => Promise<void> =
  ({ name, isHost }: { name: string; isHost: boolean }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const id = await PeerConnection.startPeerSession();
      PeerConnection.onIncomingConnection((conn, connectionMap) => {
        const peerId = conn.peer;
        message.info("Incoming connection: " + peerId);
        dispatch(addConnectionList(peerId));
        PeerConnection.onConnectionDisconnected(peerId, () => {
          message.info("Connection closed: " + peerId);
          dispatch(removeConnectionList(peerId));
        });
        PeerConnection.onConnectionReceiveData(peerId, async (data) => {
          await dispatch(data);
          const state = store.getState();
          console.log("Receiving data");
          console.log({ data });

          if (isHost) {
            connectionMap.forEach(async (_, key) => {
              console.log("sending this data as host");
              console.log(update(state.multiplayer));
              await PeerConnection.sendConnection(
                key,
                update(state.multiplayer)
              );
            });
          }
        });
      });
      dispatch(startPeerSession(id));
      dispatch(addName(id, name));
      if (isHost) {
        dispatch(addHost(id));
      }
      dispatch(setLoading(false));
    } catch (err) {
      console.log(err);
      dispatch(setLoading(false));
    }
  };
