var Mode;
(function (Mode) {
    Mode[Mode["r"] = 0] = "r";
    Mode[Mode["w"] = 1] = "w";
})(Mode || (Mode = {}));
;
function Open(fname, mode) {
    console.log("Filed Opened in mode: ", mode);
}
Open("file1", Mode.r);
Open("file2", Mode.w);
// Open("file2", "Nahin bataunga");
// function Open(fname: string, mode: string) {
//     console.log("Filed Opened in mode: ", mode);
// }
// Open("file1", "r");
// Open("file2", "w");
// Open("file2", "Nahin bataunga");
