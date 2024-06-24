import React from "react";
import { MainContent } from "../MainContent/MainContent";

export const App: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 16px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <MainContent />
    </div>
  );
};

export default App;
