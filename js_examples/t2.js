var walkTheDom = function walk (node, func) {
    if (node.nodeType === 1) {
        func(node);
        node = node.firstChild;
        while (node) {
            walk(node, func);
            node = node.nextSibling;
        }
    }
};

var disp = (function (e) {
    var line = 0;
    return function (e) {
        console.log(line, e);
        line += 1;
    }
})();

var init = function () {
    walkTheDom(document.body, disp);
}
window.onload = init;