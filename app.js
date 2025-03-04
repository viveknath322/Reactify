// const heading = React.createElement(
//     "h1",
//     {id: "title"},
//     "Hello from React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Title"),
    React.createElement("h1", {}, "Title1"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
