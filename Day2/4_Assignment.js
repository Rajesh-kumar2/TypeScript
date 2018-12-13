// ----------------------------------------------- Execution Performance Issue
// function Reverse(str: string): string[];
// function Reverse(arr: string[]): string[];
function Reverse(strOrarr) {
    return typeof strOrarr == "string"
        ? strOrarr.split("").reverse()
        : strOrarr.reverse();
}
console.log(Reverse("Manish"));
console.log(Reverse(["Manish", "Ram", "Mark", "Abhijeet"]));
