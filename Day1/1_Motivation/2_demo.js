var Employee = (function () {
    function Employee(name) {
        this._name = name;
    }

    Employee.prototype.getName = function () {
        return this._name;
    }

    Employee.prototype.setName = function (name) {
        this._name = name;
    }

    return Employee;
})();

var e1 = new Employee("Manish");
console.log(e1.getName());
e1.setName("Ramakant");
console.log(e1.getName());

var e2 = new Employee("Abhijeet");
console.log(e2.getName());
e2.setName("Subodh");
console.log(e2.getName());