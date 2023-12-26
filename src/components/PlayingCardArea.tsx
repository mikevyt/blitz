import { PlayingCardStack } from "./PlayingCardStack";
import { LabelledArea } from "./LabelledArea";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateStash } from "../store/game/gameActions";
import { Button } from "antd";
import { PlayingCardPlaceholder } from "./PlayingCardPlaceholder";
import { useAppEmit } from "../helpers/useAppEmit";

export const PlayingCardArea = () => {
  const gameState = useAppSelector((state) => state.game);
  const peer = useAppSelector((state) => state.peer);
  const dispatch = useAppDispatch();
  const emit = useAppEmit();
  const currentStashIndex = gameState.woodVisible?.[peer.id!] || -1;

  const handleClick = async () => {
    // handle overflow
    if (currentStashIndex + 3 > gameState.wood[peer.id!].length) {
      await emit(
        updateStash(
          peer.id!,
          currentStashIndex + 3 - gameState.wood[peer.id!].length
        )
      );
    } else {
      await emit(updateStash(peer.id!, currentStashIndex + 3));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        columnCount: 3 /* Set the number of columns */,
        columnGap: "20px" /* Set the gap between columns */,
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <LabelledArea label="Spread">
        {gameState.spread[peer.id!].map((cards, i) => (
          <PlayingCardStack key={i} cards={cards} />
        ))}
      </LabelledArea>
      <LabelledArea label="Stack">
        <PlayingCardStack cards={gameState.blitz[peer.id!]} />
      </LabelledArea>
      <LabelledArea label="Stash">
        {currentStashIndex !== -1 && (
          <PlayingCardStack
            cards={gameState.wood[peer.id!].slice(0, currentStashIndex)}
          />
        )}
        {currentStashIndex !== gameState.wood[peer.id!].length - 1 ? (
          <PlayingCardPlaceholder />
        ) : (
          <PlayingCardPlaceholder style={{ backgroundColor: "white" }} />
        )}
      </LabelledArea>
      <Button onClick={handleClick}>Flip Stash</Button>
    </div>
  );
};
