const parent = React.createElement(
    "div",
    {id:"parent", key:"1"},
    [React.createElement(
        "div",
        {id: "child1", key:2},
        [React.createElement("h1",{key:4}, "I'm an h1 tag"), React.createElement("h2",{key:5}, "I'm an h2 tag")]
    ),
    React.createElement(
        "div",
        {id: "child2", key:21},
        [React.createElement("h1",{key:4}, "I'm an h1 tag"), React.createElement("h2",{key:5}, "I'm an h2 tag")]
    )
    ]
)
const heading = React.createElement("h1", {id:"heading"}, "Hello World from App.js!");
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)