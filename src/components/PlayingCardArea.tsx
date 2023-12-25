import { PlayingCardStack } from "./PlayingCardStack";
import { LabelledArea } from "./LabelledArea";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateWood } from "../store/game/gameActions";
import { Button } from "antd";
import { PlayingCardPlaceholder } from "./PlayingCardPlaceholder";
import { useAppEmit } from "../helpers/useAppEmit";

export const PlayingCardArea = () => {
  const gameState = useAppSelector((state) => state.game);
  const peer = useAppSelector((state) => state.peer);
  const dispatch = useAppDispatch();
  const emit = useAppEmit();
  const currentWoodIndex = gameState.woodVisible?.[peer.id!] || -1;

  const handleClick = async () => {
    // handle overflow
    if (currentWoodIndex + 3 > gameState.wood[peer.id!].length) {
      await emit(
        updateWood(
          peer.id!,
          currentWoodIndex + 3 - gameState.wood[peer.id!].length
        )
      );
    } else {
      await emit(updateWood(peer.id!, currentWoodIndex + 3));
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
      <LabelledArea label="Post">
        {gameState.post[peer.id!].map((cards, i) => (
          <PlayingCardStack key={i} cards={cards} />
        ))}
      </LabelledArea>
      <LabelledArea label="Blitz">
        <PlayingCardStack cards={gameState.blitz[peer.id!]} />
      </LabelledArea>
      <LabelledArea label="Wood">
        {currentWoodIndex !== -1 && (
          <PlayingCardStack
            cards={gameState.wood[peer.id!].slice(0, currentWoodIndex)}
          />
        )}
        {currentWoodIndex !== gameState.wood[peer.id!].length - 1 ? (
          <PlayingCardPlaceholder />
        ) : (
          <PlayingCardPlaceholder style={{ backgroundColor: "white" }} />
        )}
      </LabelledArea>
      <Button onClick={handleClick}>Flip Wood</Button>
    </div>
  );
};
