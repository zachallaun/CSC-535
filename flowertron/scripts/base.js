function seize(e) {
    "use strict";
    var randColor = function () {
            return (Math.floor(Math.random()*256)).toString();
        };
    document.body.style.backgroundColor = "rgb(" +
                                            randColor() + "," +
                                            randColor() + "," +
                                            randColor() + ")";
}

window.onload = function () {
    document.body.addEventListener("mouseover", seize);
};