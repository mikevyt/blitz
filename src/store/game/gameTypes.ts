import { PlayingCard } from "../../types/PlayingCard";

export enum GameActionType {
  UPDATE_WOOD = "UPDATE_WOOD",
}

export interface GameState {
  readonly dutch?: PlayingCard[][];
  readonly post?: { [id: string]: PlayingCard[] };
  readonly blitz?: { [id: string]: PlayingCard[] };
  readonly wood?: { [id: string]: PlayingCard[] };
  readonly woodVisible?: { [id: string]: number };
}
