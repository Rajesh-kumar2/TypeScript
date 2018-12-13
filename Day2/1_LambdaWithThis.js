// function Person(a: number) {
//     this.age = a;
//     this.growOld = function () {
//         console.log(this);
//         this.age += 1;
//     }
// }
// function Person(a: number) {
//     this.age = a;
//     var self = this;
//     this.growOld = function () {
//         console.log(this);
//         self.age += 1;
//     }
// }
function Person(a) {
    var _this = this;
    this.age = a;
    this.growOld = function () {
        _this.age += 1;
    };
}
var p1 = new Person(20);
setInterval(p1.growOld, 1000);
// setInterval(p1.growOld.bind(p1), 1000);
setInterval(function () {
    console.log(p1.age);
}, 1000);
// console.log(p1.age);
// p1.growOld();
// p1.growOld();
// p1.growOld();
// p1.growOld();
// p1.growOld();
// console.log(p1.age);
