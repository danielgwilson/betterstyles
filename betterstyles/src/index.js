import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Office } from "@microsoft/office-js/dist/office";

let scriptOfficeJS = document.createElement("script");
scriptOfficeJS.setAttribute(
    "src",
    "https://appsforoffice.microsoft.com/lib/1/hosted/Office.js"
);
document.head.appendChild(scriptOfficeJS);

Office.initialize = function() {
    console.log("YAY!");
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
