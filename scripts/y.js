function Y (func) {
    return (function (x) {
        return x(x);
    })(function (x) {
        return func(function (y) {
            return x(x)(y);      
        });
    });
}

var factorial = Y(function (fact) {
    return function (n) {
        return n <= 2 ? n : n * fact(n-1);
    };
});

var fib = Y(function (fibn) {
    return function (n) {
        return n <= 2 ? 1 : fibn(n - 1) + fibn(n - 2);
    };
});

console.log("fib(5): "+fib(5));
console.log("factorial(5): "+factorial(5));