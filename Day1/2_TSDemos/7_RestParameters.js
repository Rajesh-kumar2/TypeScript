function Calculate() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(Calculate());
console.log(Calculate(1, 2, 3));
var arr = [1, 2, 3, 4, 5];
console.log(Calculate.apply(void 0, arr));
