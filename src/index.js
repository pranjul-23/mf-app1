import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Bootstrap Module Federation
import("./bootstrap").then(({ mount }) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
