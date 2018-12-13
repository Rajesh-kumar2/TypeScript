"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _7_PointModule_js_1 = require("./7_PointModule.js");
var pointObj = new _7_PointModule_js_1.Point(2, 3);
console.log(pointObj.getDistance());
$(document).ready(function () {
    $("#result").html(pointObj.getDistance().toString());
});
