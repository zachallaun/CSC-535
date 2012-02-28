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
function walkTheDom(node, func, nestLvl) {
    "use strict";
    if (nestLvl === undefined) {
        nestLvl = 0;
    }
    if (node.nodeType === 1) {
        func(node, nestLvl);
    }
    node = node.firstChild;

    while (node) {
        walkTheDom(node, func, nestLvl + 1);
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

function iterToArray(iterable) {
    "use strict";
    var iterarray = [], i, len;
    
    for (i = 0, len = iterable.length; i < len; i ++) {
        iterarray.push(iterable[i])
    }

    return iterarray;
}

function domTree(node) {
    "use strict";
    var children = [],
        i, len,
        tree = {
            tag: node.tagName,
            className: node.className,
            id: node.id
        };

    for (i = 0, len = node.children.length; i < len; i++) {
        children.push(domtree(node.children[i]));
    }
    tree.children = children;
    
    return tree;
}

window.onload = function () {
    walkTheDom(document.body, domlog);
    // window.dom = domTree(document.body.cloneNode(true));
    // document.body.addEventListener("mouseOver", seize);
};