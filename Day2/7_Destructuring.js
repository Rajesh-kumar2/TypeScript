var _a;
var calculator = (function () {
    function add(x, y) {
        return x + y;
    }
    function sub(x, y) {
        return x - y;
    }
    function mul(x, y) {
        return x * y;
    }
    function div(x, y) {
        return x / y;
    }
    // Object Literal - Shortcut
    return {
        add: add,
        sub: sub,
        mul: mul,
        div: div
    };
    // return {
    //     add: add,
    //     sub: sub,
    //     mul: mul,
    //     div: div
    // };
})();
// console.log(calculator.add(2, 3));
// console.log(calculator.sub(2, 3));
// console.log(calculator.mul(2, 3));
// console.log(calculator.div(2, 3));
//------------------------------------- JS Syntax
// var add = calculator.add;
// var sub = calculator.sub;
// console.log(add(2, 3));
// console.log(sub(2, 3));
//-------------------------------------- TS - Object Destructuring
// var { add, sub } = calculator;
// console.log(add(2, 3));
// console.log(sub(2, 3));
// -------------------------------------- TS - Array Destructuring
var myArr = [10, 20, 30, 40, 50];
// var x = myArr[0];
// var y = myArr[1];
// var [x, , y] = myArr;
// console.log(x, y);
// Swap
var x = myArr[0], y = myArr[2];
console.log("Before Swapping - x=" + x + " y=" + y);
_a = [x, y], y = _a[0], x = _a[1];
console.log("After Swapping - x=" + x + " y=" + y);
// Template Literal
var msg = "After Swapping - x \n\n\n            = " + x + " y = " + y;
console.log(msg);
