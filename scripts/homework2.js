// Problem 1: Even Fibonacci Sum

var genFibValues = function(n) {
    // Returns an array of Fibonacci values, such that
    // the last value is less than n
    var fibVals = [1, 1], i = 2;

    while (fibVals.slice(-1)[0] < n) {
        fibVals[i] = fibVals[i - 1] + fibVals[i - 2];
        i++;
    }

    return fibVals.slice(0, -1);
}

var sumEvenFib = function(n) {
    // Sums the even values of the Fibonacci sequence such
    // that all summed values are less than n
    var sum = 0;
    var fibVals = genFibValues(n);

    for (var i = 0; i < fibVals.length; i++) {
        if (fibVals[i] % 2 === 0) {
            sum += fibVals[i];
        }
    }

    return sum;
}

console.log("Summed even Fibonacci values up to 4,000,000: " + sumEvenFib(4000000));


// Problem 2: Largest Palindrome of Product of Two 3-digit Numbers

var isPalindrome = function(n) {
    // Accepts a number or string n and returns true if n is a a palindrome,
    // otherwise false
    return n.toString() === n.toString().split("").reverse().join("");
}

// No longer used
var arrayMax = function(array) {
    // Returns the maximum value in array
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max
}

var largestPalindrome = function(a, b) {
    // Accepts two values, a and b, and returns the largest palindrome
    // created from some (x * y) such that x <= a and y <= b
    var palindromes = [],
        largest = 0;

    for (var i = a; i > 0; i--) {
        for (var j = b; j > 0; j--) {
            if (i * j > largest && isPalindrome(i * j)) {
                largest = i * j;
                // If i * j is a palindrome, break from the j-for, decrementing i.
                // There is no need to find further palindromes for that value of i,
                // as they cannot be larger than what we've already found. 
                // This saves quite a bit of unnecessary computation.
                break
            }
        }
    }

    return largest
}

console.log("Largest palindrome composed of two 3-digit numbers: " + largestPalindrome(999, 999));