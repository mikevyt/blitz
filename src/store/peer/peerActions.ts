import { PeerActionType } from "./peerTypes";
import { Dispatch } from "redux";
import { DataType, PeerConnection } from "../../helpers/peer";
import { message } from "antd";
import {
  addConnectionList,
  removeConnectionList,
} from "../connection/connectionActions";
import download from "js-file-download";

export const startPeerSession = (id: string) => ({
  type: PeerActionType.PEER_SESSION_START,
  id,
});

export const addName = (name: string) => ({
  type: PeerActionType.NAME_ADD,
  name,
});

export const stopPeerSession = () => ({
  type: PeerActionType.PEER_SESSION_STOP,
});
export const setLoading = (loading: boolean) => ({
  type: PeerActionType.PEER_LOADING,
  loading,
});

export const startPeer: (
  name: string
) => (dispatch: Dispatch) => Promise<void> =
  (name: string) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const id = await PeerConnection.startPeerSession();
      PeerConnection.onIncomingConnection((conn) => {
        const peerId = conn.peer;
        message.info("Incoming connection: " + peerId);
        dispatch(addConnectionList(peerId));
        PeerConnection.onConnectionDisconnected(peerId, () => {
          message.info("Connection closed: " + peerId);
          dispatch(removeConnectionList(peerId));
        });
        PeerConnection.onConnectionReceiveData(peerId, (file) => {
          message.info("Receiving file " + file.fileName + " from " + peerId);
          if (file.dataType === DataType.FILE) {
            download(
              file.file || "",
              file.fileName || "fileName",
              file.fileType
            );
          }
        });
      });
      dispatch(startPeerSession(id));
      dispatch(addName(name));
      dispatch(setLoading(false));
    } catch (err) {
      console.log(err);
      dispatch(setLoading(false));
    }
  };
