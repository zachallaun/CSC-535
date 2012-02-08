var x = "Hello";
var i = 1.2;
var book = {
    title: "Moby Dick",
    author: "Melville"
};

var fact = function(n) {
    var t = 1;
    for (var i = 1; i <= n; i++) {
        t = t * i
    }
    return t;
}

var fib = function myFib(n) {
    if (n <= 2) {
        return 1;
    } else {
        return myFib(n - 1) + myFib(n - 2);
    }

}

var sumDivThreeFive = function(n) {
    var sum = 0;
    for (var i = 1; i < n; i++) {
        if (div35(i)) {
            sum += i;
        }
    }

    function div35(n) {
        return (!(n % 3) || !(n % 5));
    }
    return sum;
}

console.log(sumDivThreeFive(10));