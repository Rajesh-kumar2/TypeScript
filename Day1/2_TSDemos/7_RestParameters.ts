function Calculate(...args: number[]) {
    var sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

console.log(Calculate());
console.log(Calculate(1, 2, 3));

var arr = [1, 2, 3, 4, 5];
console.log(Calculate(...arr));

