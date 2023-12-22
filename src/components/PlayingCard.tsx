import React from "react";
import { Card } from "antd";
import { PlayingCard as PlayingCardType } from "../types/PlayingCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deselectCard, selectCard } from "../store/local/localActions";
import { validateMove } from "../helpers/validateMove";

export const PlayingCard = ({
  card,
  style,
}: {
  card: PlayingCardType;
  style?: React.CSSProperties;
}) => {
  const localState = useAppSelector((state) => state.local);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (!localState.selectedCard) {
      dispatch(selectCard(card));
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
      // switch (localState.selectedCard.location) {
      //   case "post":
      //     dispatch(moveCardPostToNewDutchPile("id", localState.selectedCard));
      //   case "blitz":
      //   case "wood":
      //   case "dutch":
      //   default:
      //     return;
      // }
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
        border: localState.selectedCard === card ? "5px solid black" : 0,
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
