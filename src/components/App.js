import React from "react";
import UseMemo from "../UseMemo";
import ReactMemo from "../ReactMemo";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Georgia, serif" }}>
      <UseMemo />
      <hr />
      <ReactMemo />
    </div>
  );
}

export default App;