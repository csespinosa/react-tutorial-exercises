import React from "react"; // Main React.js library

import ReactDOM from "react-dom"; // We use ReactDOM to render into the DOM

// This function returns a string that will be rendered
export const PrintHello = () => {
	return <h1>Love React</h1>;
};

//              what           where
ReactDOM.render(PrintHello(), document.querySelector("#myDiv"));
