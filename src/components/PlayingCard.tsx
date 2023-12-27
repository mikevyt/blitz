import { CheckCircleFilled } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import { colorMap } from "../helpers/colorMap";
import { useAppEmit } from "../helpers/useAppEmit";
import { validateMove } from "../helpers/validateMove";
import {
  moveCardSpreadToExistingCenterPile,
  moveCardSpreadToExistingSpreadPile,
  moveCardStackToExistingCenterPile,
  moveCardStackToExistingSpreadPile,
  moveCardStackToNewSpreadPile,
  moveCardStashToExistingCenterPile,
  moveCardStashToExistingSpreadPile,
} from "../store/game/gameActions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deselectCard, selectCard } from "../store/local/localActions";
import { PlayingCard as PlayingCardType, isEqual } from "../types/PlayingCard";

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
      if (card.location !== "center") {
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
      console.log(localState.selectedCard.location);
      switch (localState.selectedCard.location) {
        case "spread":
          if (card.location === "center") {
            await emit(
              moveCardSpreadToExistingCenterPile(
                peer.id!,
                localState.selectedCard,
                card
              )
            );
          } else if (card.location === "spread") {
            await emit(
              moveCardSpreadToExistingSpreadPile(
                peer.id!,
                localState.selectedCard,
                card
              )
            );
          }
          // Only add card if removing card would lead to empty stack
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
          if (card.location === "center") {
            await emit(
              moveCardStackToExistingCenterPile(
                peer.id!,
                localState.selectedCard,
                card
              )
            );
          } else if (card.location === "spread") {
            await emit(
              moveCardStackToExistingSpreadPile(
                peer.id!,
                localState.selectedCard,
                card
              )
            );
          }

          break;
        case "stash":
          if (card.location === "center") {
            await emit(
              moveCardStashToExistingCenterPile(
                peer.id!,
                localState.selectedCard,
                card
              )
            );
          } else if (card.location === "spread") {
            await emit(
              moveCardStashToExistingSpreadPile(
                peer.id!,
                localState.selectedCard,
                card
              )
            );
          }
          break;
        case "center":
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
        backgroundColor: colorMap[card.color],
        color: "white",
        fontSize: "2rem",
        border:
          localState.selectedCard === card
            ? "5px solid yellow"
            : "5px solid white",
        width: "5rem",
        height: "7rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
        boxShadow: "-2px 2px 0px rgb(230, 230, 230)",
        ...style,
      }}
    >
      {card.digit === 10 && card.location === "center" ? (
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
