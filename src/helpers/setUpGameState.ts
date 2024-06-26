import "object.groupby";
import { GameState } from "../store/game/gameTypes";
import { generateCards } from "./generateCards";

// for testing
// export const setUpGameState = (id: string): GameState => {
//   let cards = generateCards(id);
//   // shuffle(cards);
//   cards = Object.values(
//     cards.reduce(function (r, a) {
//       r[a.color] = r[a.color] || [];
//       r[a.color].push(a);
//       return r;
//     }, Object.create(null)) as PlayingCard[][]
//   ).flat();

//   console.log({ cards });

//   return {
//     center: [],
//     spread: {
//       [id]: cards
//         .slice(10, 13)
//         .map((card) => [{ ...card, location: "spread" }]),
//     },
//     stack: {
//       [id]: cards
//         .slice(0, 10)
//         .reverse()
//         .map((card) => ({ ...card, location: "stack" })),
//     },
//     stash: {
//       [id]: cards
//         .slice(14, cards.length)
//         .map((card) => ({ ...card, location: "stash" })),
//     },
//     stashVisible: { [id]: -1 },
//   };
// };

export const setUpGameState = (id: string): GameState => {
  const cards = generateCards(id);
  shuffle(cards);

  return {
    center: [],
    spread: {
      [id]: cards.slice(0, 3).map((card) => [{ ...card, location: "spread" }]),
    },
    stack: {
      [id]: cards.slice(3, 13).map((card) => ({ ...card, location: "stack" })),
    },
    stash: {
      [id]: cards
        .slice(14, cards.length)
        .map((card) => ({ ...card, location: "stash" })),
    },
    stashVisible: { [id]: -1 },
  };
};
