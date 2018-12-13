var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (msg) {
        console.log(msg);
        return "Hello World!";
    };
    Person.prototype.check = function () {
        console.log("Check Implementation....");
    };
    return Person;
}());
var per1 = new Person();
per1.greet("Hi");
var per2 = new Person();
per2.check();
var per3 = new Person();
per3.greet("Hello");
per3.check();
