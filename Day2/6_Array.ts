// var numArr = [10, 20, 30, 40, 50];
// var numArr = [10, "ABC", true];

// var numArr: number[];
var numArr: Array<number>;

numArr = [10, 20, 30, 40, 50];

// console.log(numArr.length);
numArr[8] = 80;
// console.log(numArr.length);

// for (let i = 0; i < numArr.length; i++) {
//     console.log(numArr[i]);
// }

// for (let i in numArr) {
//     console.log(i + "\t" + numArr[i]);
// }

// numArr.forEach((value, index, arr) => {
//     console.log(index + "\t" + value);
// });

// for (let i of numArr) {
//     console.log(i);
// }

var employees = [
    { id: 1, name: "Manish" },
    { id: 2, name: "Ram" },
    { id: 3, name: "Abhijeet" },
    { id: 4, name: "Pravin" },
    { id: 5, name: "Subodh" }
];

var result = employees.find((e) => e.id == 3);

if (result)
    console.log(result);
else
    console.log("Record not found..");