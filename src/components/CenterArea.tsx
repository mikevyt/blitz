import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { validateMove } from "../helpers/validateMove";
import { PlayingCardStack } from "./PlayingCardStack";
import {
  moveCardBlitzToNewDutchPile,
  moveCardBlitzToNewPostPile,
  moveCardPostToNewDutchPile,
  moveCardWoodToNewDutchPile,
} from "../store/game/gameActions";
import { deselectCard } from "../store/local/localActions";
import { useAppEmit } from "../helpers/useAppEmit";

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
      validateMove({ selectedCard: localState.selectedCard, isDutch: true })
    ) {
      setIsHover(true);
    }
  };

  const handleClick = async () => {
    if (
      localState.selectedCard &&
      validateMove({ selectedCard: localState.selectedCard, isDutch: true })
    ) {
      console.log(localState.selectedCard);
      switch (localState.selectedCard.location) {
        case "post":
          await emit(
            moveCardPostToNewDutchPile(peer.id!, localState.selectedCard)
          );
          await emit(
            moveCardBlitzToNewPostPile(
              peer.id!,
              gameState.blitz[peer.id!][gameState.blitz[peer.id!].length - 1]
            )
          );
          break;
        case "blitz":
          await emit(
            moveCardBlitzToNewDutchPile(peer.id!, localState.selectedCard)
          );
          break;
        case "wood":
          await emit(
            moveCardWoodToNewDutchPile(peer.id!, localState.selectedCard)
          );
          break;
        case "dutch":
        default:
          break;
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
        width: "100vw",
        height: "100vh",
        backgroundColor:
          isHover && !!localState.selectedCard ? "#CCC" : undefined,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "20px",
        rowGap: "20px",
        paddingLeft: "10vw",
        paddingRight: "10vw",
      }}
    >
      {gameState.dutch.map((stack, i) => (
        <PlayingCardStack key={i} cards={stack} />
      ))}
    </div>
  );
};
