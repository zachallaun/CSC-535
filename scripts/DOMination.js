/***
* DOMination is a small module designed to ease the burden
* of selecting elements from the DOM.
* DOMination exposes a global window.dominate() method.
***/

var dd = {

    // Implements very basic css-like selection
    // Ex. grab("#id") returns a single nodeElement
    // Ex. grab(".class") returns a list of elements with class "class"
    // Pass true to optional argument single to return a single element; in 
    // the case of a list, the first element
    grab: function (selector, single) {
        var identifier = selector[0],
            sel = selector.slice(1),
            nodeEle;
        
        if (identifier == ".") {
            nodeEle = document.getElementsByClassName(sel);
        } else if (identifier == "#") {
            nodeEle = document.getElementById(sel);
        } else {
            nodeEle = document.getElementsByTagName(selector);
        }   

        return (single && nodeEle instanceof Array) ? nodeEle[0] : nodeEle;
    },

    // Returns true if descendant descends from anscestor, otherwise false
    desc: function (descendant, anscestor) {
        return ((descendant.parentNode == anscestor) 
                || (descendant.parentNode != document) 
                    && dd.desc (descendant.parentNode, anscestor));
    },

    // Cross-browser event registration
    // Ex. dd.register(element, 'click', function(){...});
    register: (function () {
        var registerFunc, 
            listenerFuncs = {
            addEventListener: function (el, ev, fn) {
                el.addEventListener(ev, fn, false);
            },
            attachEvent: function (el, ev, fn) {
                el.attachEvent('on'+ev, fn);
            },
            generalEvent: function (el, ev, fn) {
                el['on'+ev] = fn;
            }
        };

        return function (ele, evt, func) {
            if (registerFunc) {
                registerFunc(ele, evt, func)
            } else {
                if (ele.addEventListener) {
                    registerFunc = listenerFuncs.addEventListener;
                } else if (ele.attachEvent) {
                    registerFunc = listenerFuncs.attachEvent;
                } else {
                    registerFunc = listenerFuncs.generalEvent;
                }
                registerFunc(ele, evt, func);
            }
        }
    }()),

    // Accepts an array and a function, and calls the function for each
    // (index, value) of the array
    each: function (array, fn) {
        for (var i = 0; i < array.length; i++) {
            fn(i, array[i]);
        }
    }

}

window.grab = dd.grab;