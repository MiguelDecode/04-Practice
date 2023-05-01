import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById("app");

const root = ReactDOM.createRoot(appDomElement);

const button1 = React.createElement("button", { "data-id": 123 }, "Button 1");
const button2 = React.createElement("button", { "data-id": 456 }, "Button 2");
const button3 = React.createElement("button", { "data-id": 789 }, "Button 3");

const div = React.createElement(React.Fragment, null, [
  button1,
  button2,
  button3,
]);

root.render(div);

<React.Fragment>
  <button data-id="123">Button 1</button>
  <button data-id="456">Button 2</button>
  <button data-id="789">Button 3</button>
</React.Fragment>;
