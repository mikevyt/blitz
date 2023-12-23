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

export const CenterArea = () => {
  const localState = useAppSelector((state) => state.local);
  const gameState = useAppSelector((state) => state.game);
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

  const handleClick = () => {
    if (
      localState.selectedCard &&
      validateMove({ selectedCard: localState.selectedCard, isDutch: true })
    ) {
      console.log(localState.selectedCard);
      switch (localState.selectedCard.location) {
        case "post":
          dispatch(moveCardPostToNewDutchPile("id", localState.selectedCard));
          dispatch(
            moveCardBlitzToNewPostPile(
              "id",
              gameState.blitz["id"][gameState.blitz["id"].length - 1]
            )
          );
          break;
        case "blitz":
          dispatch(moveCardBlitzToNewDutchPile("id", localState.selectedCard));
          break;
        case "wood":
          dispatch(moveCardWoodToNewDutchPile("id", localState.selectedCard));
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
      }}
    >
      {gameState.dutch.map((stack, i) => (
        <PlayingCardStack key={i} cards={stack} />
      ))}
    </div>
  );
};
