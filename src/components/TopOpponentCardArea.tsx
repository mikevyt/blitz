import { useAppSelector } from "../store/hooks";
import { PlayingCardPlaceholder } from "./PlayingCardPlaceholder";
import { PlayingCardStack } from "./PlayingCardStack";

export const TopOpponentCardArea = ({ id }: { id: string }) => {
  const gameState = useAppSelector((state) => state.game);
  const multiplayer = useAppSelector((state) => state.multiplayer);
  const currentStashIndex = gameState.stashVisible?.[id] || -1;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {/* TODO: create own component */}
      <div>
        {multiplayer.emoji[id]}
        {multiplayer.name[id]}
      </div>

      {gameState.spread[id!].map((cards, i) => (
        <PlayingCardStack key={i} cards={cards} />
      ))}
      <PlayingCardStack cards={gameState.stack[id]} />
      {currentStashIndex !== gameState.stash[id!].length - 1 ? (
        <PlayingCardPlaceholder />
      ) : (
        <PlayingCardPlaceholder
          style={{
            backgroundColor: "white",
            boxShadow: undefined,
            border: undefined,
          }}
        />
      )}
      {currentStashIndex !== -1 && (
        <PlayingCardStack
          cards={gameState.stash[id].slice(0, currentStashIndex)}
        />
      )}
    </div>
  );
};
