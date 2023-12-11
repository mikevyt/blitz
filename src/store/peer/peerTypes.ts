export enum PeerActionType {
  PEER_SESSION_START = "PEER_SESSION_START",
  PEER_SESSION_STOP = "PEER_SESSION_STOP",
  PEER_LOADING = "PEER_LOADING",
  NAME_ADD = "NAME_ADD",
}

export interface PeerState {
  readonly id?: string;
  readonly loading: boolean;
  readonly started: boolean;
  readonly name: string;
}
