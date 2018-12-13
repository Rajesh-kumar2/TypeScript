var MyNS;
(function (MyNS) {
    var Point = /** @class */ (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        Point.prototype.getDistance = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        return Point;
    }());
    MyNS.Point = Point;
})(MyNS || (MyNS = {}));
var point = new MyNS.Point(2, 3);
console.log(point.getDistance());
