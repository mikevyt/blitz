import React from "react";

export const CenterArea = () => {
  const [isHover, setIsHover] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        border: "2px dotted #D3D3D3",
        width: "100vw",
        height: "100vh",
        backgroundColor: isHover ? "#CCC" : undefined,
      }}
    />
  );
};
