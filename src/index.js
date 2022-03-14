"use strict";

import "./scss/styles.scss";

console.log("hello");

function component() {
    const element = document.createElement("div");
    element.innerHTML = "Hello webpack";
    return element;
}

document.body.appendChild(component());