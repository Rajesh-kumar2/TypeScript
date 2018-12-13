import { IPoint, Point } from './7_PointModule.js';

let pointObj: IPoint = new Point(2, 3);
console.log(pointObj.getDistance());

$(document).ready(function () {
    $("#result").html(pointObj.getDistance().toString());
});