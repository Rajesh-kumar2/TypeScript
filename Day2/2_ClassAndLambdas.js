var Person1 = /** @class */ (function () {
    function Person1(a) {
        var _this = this;
        // growOld() {
        //     this.age += 1;
        // }
        this.growOld = function () {
            _this.age += 1;
        };
        this.age = a;
    }
    return Person1;
}());
var p2 = new Person1(20);
// console.log(p2.age);
// p2.growOld();
// console.log(p2.age);
setInterval(p2.growOld, 1000);
setInterval(function () {
    console.log(p2.age);
}, 1000);
