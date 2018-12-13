// class Employee {
//     private name: string;

//     constructor(n = "NA") {
//         this.name = n;
//     }

//     getName(): string {
//         return this.name;
//     }

//     setName(n: string): void {
//         this.name = n;
//     }
// }

// // var emp = new Employee();
// var emp = new Employee("Manish");
// console.log(emp.getName());
// emp.setName("Abhijeet");
// console.log(emp.getName());

// ----------------------------------------- Properties
// class Employee {
//     private name: string;

//     constructor(n = "NA") {
//         this.name = n;
//     }

//     get Name(): string {
//         return this.name;
//     }

//     set Name(n: string) {
//         this.name = n;
//     }
// }

// // var emp = new Employee();
// var emp = new Employee("Manish");
// console.log(emp.Name);
// emp.Name = "Abhijeet";
// console.log(emp.Name);

// ------------------------------------------------ Parameter Members
// class Employee {
//     // private name: string;
//     // constructor(n = "NA") {
//     //     this.name = n;
//     // }

//     constructor(private name = "NA", private age = 0) { }

//     get Name(): string {
//         return this.name;
//     }

//     set Name(n: string) {
//         this.name = n;
//     }

//     get Age(): number {
//         return this.age;
//     }

//     set Age(a: number) {
//         this.age = a;
//     }
// }

// // var emp = new Employee();
// var emp = new Employee("Manish");
// console.log(emp.Name);
// emp.Name = "Abhijeet";
// console.log(emp.Name);

// ------------------------------------------------------- Readonly

class BankAccount {
    // private readonly accNumber: number;
    // constructor(accNumber: number) {
    //     this.accNumber = accNumber;
    // }

    private static bankName = "ICICI";

    constructor(private readonly accNumber: number) { }

    get AccNumber() {
        return this.accNumber;
    }

    get BankName() {
        return BankAccount.bankName;
    }

    static set BankName(bname: string) {
        BankAccount.bankName = bname;
    }
}

BankAccount.BankName = "HDFC";

var b1 = new BankAccount(1);
console.log("Bank Name: ", b1.BankName);
console.log("Account Number: ", b1.AccNumber);

var b2 = new BankAccount(2);
console.log("Bank Name: ", b2.BankName);
console.log("Account Number: ", b2.AccNumber);