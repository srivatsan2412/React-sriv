// Why We Need JSX!!

// const heading = React.createElement("h1", {
//     id: "heading"
// }, "Hello World from React!!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement(
    "div", 
    { id: "parent"}, 
   [
    React.createElement(
        "div", 
        { id: "child" }, 
        [
            React.createElement("h1", {}, "Hello from H1"),
            React.createElement("h2", {}, "Hello from H2"),
        ]
    ),
    React.createElement(
        "div", 
        { id: "child2" }, 
        [
            React.createElement("h1", {}, "Hello from H1"),
            React.createElement("h2", {}, "Hello from H2"),
        ]
    )
   ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// to create a simple h1 and h2 siblings for two child divs require this much clumsy code that is why we need JSX.