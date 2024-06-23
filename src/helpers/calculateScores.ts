import { GameState } from "../store/game/gameTypes";

export const calculateScores = (game: GameState) => {
  const scoresMap = new Map<string, number>();
  game.center.forEach((deck) =>
    deck.forEach((card) =>
      scoresMap.set(card.owner, scoresMap.get(card.owner) || 0 + 1)
    )
  );
  scoresMap.forEach((_, key) =>
    scoresMap.set(key, scoresMap.get(key) || 0 - 2)
  );
  return scoresMap;
};
