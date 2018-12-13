class Employee {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    setName(name: string) {
        this._name = name;
    }
}

var e1 = new Employee("Manish");
console.log(e1.getName());
e1.setName("Ramakant");
console.log(e1.getName());

var e2 = new Employee("Abhijeet");
console.log(e2.getName());
e2.setName("Subodh");
console.log(e2.getName());