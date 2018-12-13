// var myNumber: string = "12.5kjhfkjshfk";

// var r1 = parseInt(myNumber) + 10;
// console.log(r1);

// var r2 = parseFloat(myNumber) + 10;
// console.log(r2);

// var r3 = Number(myNumber) + 10;
// console.log(r3);

// number   -   Number()
// string   -   String()
// boolean  -   Boolean()
// object   -   Object()

let myData: any = "This is just for check";

let l1 = myData.length;
let l2 = (<string>myData).length;
let l3 = (myData as string).length;

console.log(l1);
console.log(l2);
console.log(l3);
