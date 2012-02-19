// Add string repeat function to proto
// "hello".repeat(2) === "hellohello"
if (!String.hasOwnProperty("repeat")) {
    String.prototype.repeat = function (num) {
        "use strict";
        // The following creates an Array with
        // (num + 1) undefined values, such that
        // Array.join("string") will create a 
        // repeat of that string.
        return new Array(num + 1).join(this);
    };
}

// Extended walkTheDom function:
// Keeps track of indentation level,
// with indentLvl defaulting to 0.
function walkTheDom(node, func, indentLvl) {
    "use strict";
    if (indentLvl === undefined) {
        indentLvl = 0;
    }
    if (node.nodeType === 1) {
        func(node, indentLvl);
    }
    node = node.firstChild;

    while (node) {
        walkTheDom(node, func, indentLvl + 1);
        node = node.nextSibling;
    }
}

// Formatted DOM logging function.
function domlog(node, indentLvl) {
    "use strict";
    var pass = "|   ".repeat(indentLvl - 1),
        extend = indentLvl ? "+---" : "",
        indent = pass + extend;
    console.log(indent + node.tagName);
}

window.onload = function () {
    walkTheDom(document, domlog);
};