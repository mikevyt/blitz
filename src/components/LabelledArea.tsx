import React from "react";
import Paragraph from "antd/es/typography/Paragraph";

export const LabelledArea = (
  props: React.PropsWithChildren<{ label: string }>
) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          border: "2px dotted #D3D3D3",
          padding: "8px",
          display: "flex",
          flexDirection: "row",
          columnGap: "20px",
        }}
      >
        {props.children}
      </div>
      <Paragraph style={{ color: "#D3D3D3" }}>{props.label}</Paragraph>
    </div>
  );
};
