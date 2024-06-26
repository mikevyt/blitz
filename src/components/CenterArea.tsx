import React from "react";
import { useAppEmit } from "../helpers/useAppEmit";
import { validateMove } from "../helpers/validateMove";
import {
  moveCardSpreadToNewCenterPile,
  moveCardStackToNewCenterPile,
  moveCardStackToNewSpreadPile,
  moveCardStashToNewCenterPile,
} from "../store/game/gameActions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deselectCard } from "../store/local/localActions";
import { endGame } from "../store/multiplayer/multiplayerActions";
import { isEqual } from "../types/PlayingCard";
import { PlayingCardStack } from "./PlayingCardStack";

export const CenterArea = () => {
  const localState = useAppSelector((state) => state.local);
  const gameState = useAppSelector((state) => state.game);
  const peer = useAppSelector((state) => state.peer);
  const emit = useAppEmit();
  const dispatch = useAppDispatch();
  const [isHover, setIsHover] = React.useState(false);

  const handleMouseEnter = () => {
    if (
      localState.selectedCard &&
      validateMove({ selectedCard: localState.selectedCard, isCenter: true })
    ) {
      setIsHover(true);
    }
  };

  const handleClick = async () => {
    if (
      localState.selectedCard &&
      validateMove({ selectedCard: localState.selectedCard, isCenter: true })
    ) {
      console.log(localState.selectedCard);
      switch (localState.selectedCard.location) {
        case "spread":
          await emit(
            moveCardSpreadToNewCenterPile(peer.id!, localState.selectedCard)
          );
          if (
            gameState.spread[peer.id!].find((cards) => {
              return (
                !!cards.filter((card) =>
                  isEqual(localState.selectedCard!, card)
                ).length && cards.length === 1
              );
            })
          ) {
            await emit(
              moveCardStackToNewSpreadPile(
                peer.id!,
                gameState.stack[peer.id!][gameState.stack[peer.id!].length - 1]
              )
            );
          }
          break;
        case "stack":
          await emit(
            moveCardStackToNewCenterPile(peer.id!, localState.selectedCard)
          );
          break;
        case "stash":
          await emit(
            moveCardStashToNewCenterPile(peer.id!, localState.selectedCard)
          );
          break;
        case "center":
        default:
          break;
      }
      if (
        gameState.stack[peer.id!].length === 1 &&
        isEqual(gameState.stack[peer.id!][0], localState.selectedCard)
      ) {
        await emit(endGame());
      }
      dispatch(deselectCard());
    }
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHover(false)}
      style={{
        border: "2px dotted #D3D3D3",
        flex: 1,
        backgroundColor:
          isHover && !!localState.selectedCard ? "#CCC" : undefined,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "20px",
        rowGap: "20px",
        flexWrap: "wrap",
      }}
    >
      {gameState.center.map((stack, i) => (
        <PlayingCardStack key={i} cards={stack} />
      ))}
    </div>
  );
};
