var add = function (a, b) {
    return a + b;
};

// Calling functions in different ways
var ob = {
    value : 0,
    inc : function (i) {
        this.value += i;
    }
};

// Imperative call
var s = add(3, 2);

// Twist
ob.double = function () {
    var that = this;
    var helper = function () {
        that.value = that.value * 2;
    };
    helper();
};

// Constructor
var Q = function (s) {
    this.status = s;
};

var q = new Q('Tired');
var q1 = new Q('Learning');

Q.prototype.getStatus = function () {
    return this.status;
};

// Apply
q.getStatus.apply(q1);

// Odds & ends
var sum = function () {
    var sum = 0;
    for (var i = 0, length = arguments.length; i < length; i++) {
        sum += arguments[i];
    }
    return sum;
};

var add = function (a, b) {
    if (typeof a !== 'Number' || typeof b !== 'Number') {
        throw {
            name : "TypeError",
            message : "function add() accepts 2 Number arguments"
        }
    } else {
        return a + b;
    }
};