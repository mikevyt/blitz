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
  moveCardStackToNewSpreadPile,
  moveCardStashToExistingCenterPile,
} from "../store/game/gameActions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deselectCard, selectCard } from "../store/local/localActions";
import { PlayingCard as PlayingCardType } from "../types/PlayingCard";

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
          // TODO: Need to prevent this if there's still three decks
          await emit(
            moveCardStackToNewSpreadPile(
              peer.id!,
              gameState.stack[peer.id!][gameState.stack[peer.id!].length - 1]
            )
          );
          break;
        case "stack":
          await emit(
            moveCardStackToExistingCenterPile(
              peer.id!,
              localState.selectedCard,
              card
            )
          );
          break;
        case "stash":
          await emit(
            moveCardStashToExistingCenterPile(
              peer.id!,
              localState.selectedCard,
              card
            )
          );
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
