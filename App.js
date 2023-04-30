const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child1"},
React.createElement("h1",{},"inside h1 tag")));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);