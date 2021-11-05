// You can write your own logic here to determine the actual url
// window.app2Url = "http://localhost:3002"

// Use dynamic import here to allow webpack to interface with module federation code
import Entry from "./Entry";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<Entry/>, document.getElementById("root"));
