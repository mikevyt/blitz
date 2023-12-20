import React from "react";
import { useAppSelector } from "../store/hooks";
import { validateMove } from "../helpers/validateMove";

export const CenterArea = () => {
  const localState = useAppSelector((state) => state.local);
  const [isHover, setIsHover] = React.useState(false);

  const handleClick = () => {
    if (
      localState.selectedCard &&
      validateMove({ selectedCard: localState.selectedCard, isDutch: true })
    ) {
      // perform move
    }
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        border: "2px dotted #D3D3D3",
        width: "100vw",
        height: "100vh",
        backgroundColor:
          isHover && !!localState.selectedCard ? "#CCC" : undefined,
      }}
    />
  );
};
