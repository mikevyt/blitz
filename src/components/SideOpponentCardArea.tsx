import { useAppSelector } from "../store/hooks";
import { NameEmojiDisplay } from "./NameEmojiDisplay";
import { PlayingCardPlaceholder } from "./PlayingCardPlaceholder";
import { PlayingCardStack } from "./PlayingCardStack";

export const SideOpponentCardArea = ({ id }: { id: string }) => {
  const gameState = useAppSelector((state) => state.game);
  const multiplayer = useAppSelector((state) => state.multiplayer);
  const currentStashIndex = gameState.stashVisible?.[id] || -1;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: "0 0 auto",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", columnGap: "8px" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          {gameState.spread[id!].map((cards, i) => (
            <PlayingCardStack key={i} cards={cards} />
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <PlayingCardStack cards={gameState.stack[id]} />
          {currentStashIndex !== gameState.stash[id!].length - 1 ? (
            <PlayingCardPlaceholder isOpponentCard={true} />
          ) : (
            <PlayingCardPlaceholder
              style={{
                backgroundColor: "white",
                boxShadow: undefined,
                border: undefined,
              }}
              isOpponentCard={true}
            />
          )}
          {currentStashIndex !== -1 && (
            <PlayingCardStack
              cards={gameState.stash[id].slice(0, currentStashIndex)}
            />
          )}
        </div>
      </div>
      <NameEmojiDisplay id={id} />
    </div>
  );
};
