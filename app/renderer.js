import React from "react";
import ReactDOM from "react-dom/client";
import Count from "./components/Count";

document.addEventListener("DOMContentLoaded", () => {
  const messageElement = document.getElementById("message");
  messageElement.textContent = "Hello from renderer process!";
});
// test to make sure renderer is working
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Count />
  </React.StrictMode>
);
//test to make sure react is working
