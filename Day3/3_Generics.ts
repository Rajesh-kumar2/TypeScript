// class Queue{
//     private data: number[] = [];

//     push(d:number){
//         this.data.push(d);
//     }

//     pop():number{
//         return this.data.shift();
//     }
// }

// let q1=new Queue();
// q1.push(12);
// q1.push(13);
// q1.push(14);
// console.log(q1.pop());
// console.log(q1.pop());

// class Queue {
//     private data: any[] = [];

//     push(d: any) {
//         this.data.push(d);
//     }

//     pop(): any {
//         return this.data.shift();
//     }
// }

// let q1 = new Queue();
// q1.push(12);
// q1.push("ABC");
// q1.push(13);
// q1.push(14);
// console.log(q1.pop().toFixed());
// console.log(q1.pop().toFixed());

// class Queue<T> {
//     private data: T[] = [];

//     push(d: T) {
//         this.data.push(d);
//     }

//     pop(): T {
//         return this.data.shift();
//     }
// }

// let q1 = new Queue<number>();
// q1.push(12);
// q1.push(13);
// console.log(q1.pop().toFixed());
// console.log(q1.pop().toFixed());

// let q2 = new Queue<string>();
// q2.push("abc")
// q2.push("pqr");
// console.log(q2.pop().toUpperCase());
// console.log(q2.pop().toUpperCase());

// Error
// function add1<T>(x:T, y:T) {
//     return x + y;
// }

// Constraints
interface ILength {
    length: number;
}

function GetLength<T extends ILength>(arg: T) {
    return arg.length;
}

console.log(GetLength<string>("Manish"));
console.log(GetLength<Array<number>>([10, 20, 30, 40]));
// console.log(GetLength<number>(10));