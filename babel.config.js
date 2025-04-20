module.exports = {
    presets: [
        ["@babel/preset-env", {targets: {node: "current"}}],
        ["@babel/preset-react", {runtime: "automatic"}]
    ],
};

/*
babel is a transpiler, and babel preset configs like babel/preset-react is helping our testing library 
to convert our JSX code to html so that it can read properly
*/