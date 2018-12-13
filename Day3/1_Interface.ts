// let area = function (rect: { h: number, w?: number }) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// var s1 = { h: 20, w: 10, d: 230 };
// console.log(area(s1));

// var s2 = { h: 20 };
// console.log(area(s2));

// interface IRectangle {
//     h: number;
//     w?: number;
// }

// let area = function (rect: IRectangle) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// var s1: IRectangle = { h: 20, w: 10 };
// console.log(area(s1));

// var s2: IRectangle = { h: 20 };
// console.log(area(s2));

// var add: (a: number, b: number) => number = (a, b) => a + b;

// interface IPerson {
//     name: string;
//     age: number;
//     kids: number;
//     greet: (msg: string) => string;
// }

// var p1: IPerson = {
//     name: "Abhijeet",
//     age: 34,
//     kids: 1,
//     greet: function (m) {
//         console.log(m);
//         return "Hi There";
//     }
// };

// var p1: IPerson = {
//     name: "Ramakant",
//     age: 34,
//     kids: 1,
//     greet: function (m) {
//         console.log(m);
//         return "Hey Man";
//     }
// };

// interface ICalculator {
//     add(x: number, y: number) : number;
//     sub: (x: number, y: number) => number;
//     mul: (x: number, y: number) => number;
//     div: (x: number, y: number) => number;
//     avg?: (...args: number[]) => number;
// }

// var calc: ICalculator = {
//     add: (x, y) => x + y,
//     sub: (x, y) => x - y,
//     mul: (x, y) => x * y,
//     div: (x, y) => x / y,
// };

// var calc1: ICalculator = {
//     add: function (x, y) { return x + y; },
//     sub: function (x, y) { return x - y; },
//     mul: function (x, y) { return x * y; },
//     div: function (x, y) { return x / y; },
// };

interface IMy1{}
interface IMy2{}

interface IMy3 extends IMy1, IMy2{}

class My3 implements IMy1, IMy2{}


