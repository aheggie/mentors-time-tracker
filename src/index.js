import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import HoursStateProvider from "./providers/HoursStateProvider";

ReactDOM.render(
  <React.StrictMode>
    <HoursStateProvider>
      <App />
    </HoursStateProvider>
  </React.StrictMode>,
  document.querySelector(".cards-container")
);
