import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const mount = (el) => {
  const root = ReactDOM.createRoot(el);
  root.render(<App />);
};

// If we are in development and in isolation,
// mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#root");

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
