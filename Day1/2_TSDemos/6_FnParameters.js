// function Hello(name: string):void {
//     console.log("Hello, ", name);
// }
// Hello("Manish");
// Hello();
// Hello("Abhijeet", "Pune");
// (Optional ?)
// function Hello(fname: string, lname?: string): void {
//     console.log("Hello, ", fname, " ", lname);
// }
// Hello("Manish", "Sharma");
// Hello("Abhijeet");
// function Addition(x?: number, y?: number) {
//     x = x || 0;
//     y = y || 0;
//     return x + y;
// }
// Default Parameters
function Addition(x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    return x + y;
}
console.log(Addition(2, 3));
console.log(Addition(2));
console.log(Addition());
