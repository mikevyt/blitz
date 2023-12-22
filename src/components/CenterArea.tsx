import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { validateMove } from "../helpers/validateMove";
import { PlayingCardStack } from "./PlayingCardStack";
import { moveCardPostToNewDutchPile } from "../store/game/gameActions";
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
      dispatch(moveCardPostToNewDutchPile("id", localState.selectedCard));
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
