// var a1 = 10;
// var a1 = 20;

// var i = 10;
// console.log("Before, i: ", i);

// for (var i = 0; i < 5; i++) {
//     console.log("Inside, i: ", i);
// }

// console.log("After, i: ", i);

// function Check(flag: boolean) {
//     // var d = 100;

//     if (flag) {
//         var d = 100000;
//     }

//     return d;
// }

// console.log(Check(false));
// console.log(Check(true));

// let a1 = 10;
// let a1 = 20;

// let i = 10;
// console.log("Before, i: ", i);

// for (let i = 0; i < 5; i++) {
//     console.log("Inside, i: ", i);
// }

// console.log("After, i: ", i);

function Check(flag: boolean) {
    var d = 100;

    if (flag) {
        let d = 100000;
    }

    return d;
}

console.log(Check(false));
console.log(Check(true));