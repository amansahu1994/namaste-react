import React from "react";
import ReactDOM from "react-dom/client";

// JSX => Babel transpiles it to React.createElement => JS Object => HTMLElement(When Render)
// React Element
const Title = (
    <h1 className="head">
        Namaste React using JSX
        </h1>
        );

const number = 12345;

// React Functional Component
const HeadingComponent1 = () => {
    return <h1>This is a Functional Component1</h1>;
}

// Component Composition => Put one component inside another one
const HeadingComponent2 = () => (
    <div id="container">
        {/* <Title /> */}
        <h2>{Title}</h2>
        <h1 className="heading">This is a Functional Component2</h1>
    </div>
    );


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2/>);
