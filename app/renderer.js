const React = require("react");
const ReactDOM = require("react-dom/client");
const Count = require("./components/Count").default;

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
