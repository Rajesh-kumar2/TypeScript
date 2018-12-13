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

function Add1(a: number, b: number): number {
    return a + b;
}

var Add2 = function (a: number, b: number): number {
    return a + b;
}

var num: number;
num = 10;

var Add3: (a: number, b: number) => number;
Add3 = function (x, y) {
    return x + y;
}

var Add4: (a: number, b: number) => number;
Add4 = (x, y) => { return x + y; };

var Add5: (a: number, b: number) => number;
Add5 = (x, y) => x + y;

// console.log(Add1(2, 3));
// console.log(Add2(2, 3));
// console.log(Add3(2, 3));
// console.log(Add4(2, 3));
// console.log(Add5(2, 3));

// Callbacks

function Display(fn: (a: number, b: number) => number) {
    console.log(fn(23, 45));
}

// Display(10);

Display(function (a, b) { return a * b; });
Display((a, b) => { return a * b; });
Display((a, b) => a * b);
