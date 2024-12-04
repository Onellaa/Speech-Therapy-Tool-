import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./i18n";
import { createRoot } from "react-dom/client";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
