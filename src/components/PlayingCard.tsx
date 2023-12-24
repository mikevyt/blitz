import React from "react";
import { Card } from "antd";
import { PlayingCard as PlayingCardType } from "../types/PlayingCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deselectCard, selectCard } from "../store/local/localActions";
import { validateMove } from "../helpers/validateMove";
import {
  moveCardBlitzToExistingDutchPile,
  moveCardBlitzToNewPostPile,
  moveCardPostToExistingDutchPile,
  moveCardWoodToExistingDutchPile,
} from "../store/game/gameActions";

export const PlayingCard = ({
  card,
  style,
}: {
  card: PlayingCardType;
  style?: React.CSSProperties;
}) => {
  const localState = useAppSelector((state) => state.local);
  const gameState = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (!localState.selectedCard) {
      if (card.location !== "dutch") {
        dispatch(selectCard(card));
      }
      return;
    }

    if (localState.selectedCard === card) {
      dispatch(deselectCard());
      return;
    }

    if (
      validateMove({
        selectedCard: localState.selectedCard,
        destinationCard: card,
      })
    ) {
      switch (localState.selectedCard.location) {
        case "post":
          dispatch(
            moveCardPostToExistingDutchPile("id", localState.selectedCard, card)
          );
          dispatch(
            moveCardBlitzToNewPostPile(
              "id",
              gameState.blitz["id"][gameState.blitz["id"].length - 1]
            )
          );
          break;
        case "blitz":
          dispatch(
            moveCardBlitzToExistingDutchPile(
              "id",
              localState.selectedCard,
              card
            )
          );
          break;
        case "wood":
          dispatch(
            moveCardWoodToExistingDutchPile("id", localState.selectedCard, card)
          );
          break;
        case "dutch":
        default:
          return;
      }
      dispatch(deselectCard());
    }
  };
  return (
    <Card
      onClick={handleClick}
      bordered={false}
      style={{
        backgroundColor: card.color,
        color: card.color === "yellow" ? "black" : "white",
        fontSize: "2rem",
        border: localState.selectedCard === card ? "5px solid white" : 0,
        width: "5rem",
        height: "7rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
        ...style,
      }}
    >
      {card.digit}
      {card.positive ? "+" : "-"}
    </Card>
  );
};
