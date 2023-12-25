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
import { useAppEmit } from "../helpers/useAppEmit";
import { CheckCircleFilled } from "@ant-design/icons";

export const PlayingCard = ({
  card,
  style,
}: {
  card: PlayingCardType;
  style?: React.CSSProperties;
}) => {
  const localState = useAppSelector((state) => state.local);
  const gameState = useAppSelector((state) => state.game);
  const peer = useAppSelector((state) => state.peer);
  const dispatch = useAppDispatch();
  const emit = useAppEmit();

  const handleClick = async () => {
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
          await emit(
            moveCardPostToExistingDutchPile(
              peer.id!,
              localState.selectedCard,
              card
            )
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
            moveCardBlitzToExistingDutchPile(
              peer.id!,
              localState.selectedCard,
              card
            )
          );
          break;
        case "wood":
          await emit(
            moveCardWoodToExistingDutchPile(
              peer.id!,
              localState.selectedCard,
              card
            )
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
      {card.digit === 10 && card.location === "dutch" ? (
        <CheckCircleFilled />
      ) : (
        <>
          {card.digit}
          {card.positive ? "+" : "-"}
        </>
      )}
    </Card>
  );
};
