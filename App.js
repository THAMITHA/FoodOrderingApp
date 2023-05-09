import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => ReactElement-JS Object => HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Namaste React🚀");

console.log(heading);

//JSX(transpiled before it receive the JS) -  PARCEL - Babel

//JSX=> Babel transpiles it to React.createElement=>ReactElement-JS Object =>HTMLElement(render)
const jsxHeading = (<h1 className="head">Namaste React using JSX 🚀</h1>);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
