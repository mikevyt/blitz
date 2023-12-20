import { GameActionType } from "./gameTypes";
import { PlayingCard } from "../../types/PlayingCard";

export const updateWood = (id: string, index: number) => ({
  type: GameActionType.UPDATE_WOOD,
  id,
  index,
});
