interface IPersonNew {
    name: string;
    age: number;
    kids: number;
    greet: (msg: string) => string;
}

interface ICheck {
    check: () => void;
}

class Person implements IPersonNew, ICheck {
    name: string;
    age: number;
    kids: number;

    greet(msg: string) {
        console.log(msg);
        return "Hello World!"
    }

    check(){
        console.log("Check Implementation....")
    }
}

var per1: IPersonNew = new Person();
per1.greet("Hi");

var per2: ICheck = new Person();
per2.check();

var per3 = new Person();
per3.greet("Hello");
per3.check();