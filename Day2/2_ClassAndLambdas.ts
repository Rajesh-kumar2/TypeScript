class Person1 {
    age: number;

    constructor(a: number) {
        this.age = a;
    }

    // growOld() {
    //     this.age += 1;
    // }

    growOld = () => {
        this.age += 1;
    }
}

var p2 = new Person1(20);
// console.log(p2.age);
// p2.growOld();
// console.log(p2.age);

setInterval(p2.growOld, 1000);

setInterval(function () {
    console.log(p2.age);
}, 1000);
