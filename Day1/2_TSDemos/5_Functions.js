// function Show() {
//     console.log("Show Completed......");
// }
// Show();
// var r1 = Show();
// var r2:void;
// r2 = 10;
// Fn Declaration Syntax
// function Show(): void {
//     console.log("Show Completed......");
// }
// Show();
// Fn Expression Syntax
// var n1 = 10;
// var f = function () { 
//     console.log("I am a function..");
// };
// console.log(typeof f);
// console.log(f);
// f.call(this);
// f.apply(this);
// f();
function Add1(a, b) {
    return a + b;
}
var Add2 = function (a, b) {
    return a + b;
};
var num;
num = 10;
var Add3;
Add3 = function (x, y) {
    return x + y;
};
var Add4;
Add4 = function (x, y) { return x + y; };
var Add5;
Add5 = function (x, y) { return x + y; };
// console.log(Add1(2, 3));
// console.log(Add2(2, 3));
// console.log(Add3(2, 3));
// console.log(Add4(2, 3));
// console.log(Add5(2, 3));
// Callbacks
function Display(fn) {
    console.log(fn(23, 45));
}
// Display(10);
Display(function (a, b) { return a * b; });
Display(function (a, b) { return a * b; });
Display(function (a, b) { return a * b; });
