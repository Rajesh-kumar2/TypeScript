// ----------------------------------------------- Execution Performance Issue
// function Reverse(str: string): string[];
// function Reverse(arr: string[]): string[];

// function Reverse(): string[] {
//     function M1(x: string): string[] {
//         return x.split("").reverse();
//     }

//     function M2(x: string[]): string[] {
//         return x.reverse();
//     }

//     if (typeof arguments[0] == "string")
//         return M1(arguments[0]);
//     else
//         return M2(arguments[0]);
// }

// console.log(Reverse("Manish"));
// console.log(Reverse(["Manish", "Ram", "Mark", "Abhijeet"]));

// // ------------------------------------------------- Using Single Function
// function Reverse(str: string): string[];
// function Reverse(arr: string[]): string[];

// function Reverse(strOrarr: any): string[] {
//     return typeof strOrarr == "string"
//         ? strOrarr.split("").reverse()
//         : strOrarr.reverse();
// }

// console.log(Reverse("Manish"));
// console.log(Reverse(["Manish", "Ram", "Mark", "Abhijeet"]));

// ------------------------------------------------- Using TypeGuards
// var myData: (string | number);
// myData = 10;
// myData = "ABC";

function Reverse(str: string): string[];
function Reverse(arr: string[]): string[];

function Reverse(strOrarr: (string | string[])): string[] {
    return typeof strOrarr == "string"
        ? strOrarr.split("").reverse()
        : strOrarr.reverse();
}

console.log(Reverse("Manish"));
console.log(Reverse(["Manish", "Ram", "Mark", "Abhijeet"]));