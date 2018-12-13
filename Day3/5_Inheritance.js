var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(id, make) {
        this.id = id;
        this.make = make;
    }
    Vehicle.prototype.start = function () {
        return "Vehicle with id: " + this.id + ", make as: " + this.make + " started.";
    };
    return Vehicle;
}());
var FourWheeler = /** @class */ (function (_super) {
    __extends(FourWheeler, _super);
    function FourWheeler(i, m, model) {
        if (m === void 0) { m = "Honda"; }
        if (model === void 0) { model = "Civic"; }
        var _this = _super.call(this, i, m) || this;
        _this.model = model;
        return _this;
    }
    FourWheeler.prototype.start = function () {
        return _super.prototype.start.call(this) + "\nModel is: " + this.model;
    };
    FourWheeler.prototype.move = function () {
        console.log("Moving like a car....");
    };
    return FourWheeler;
}(Vehicle));
var v = new FourWheeler(1);
console.log(v.start());
v.move();
