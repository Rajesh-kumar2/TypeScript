abstract class Vehicle {
    constructor(private id: number, protected make: string) { }

    start() {
        return `Vehicle with id: ${this.id}, make as: ${this.make} started.`;
    }

    abstract move():void;
}

class FourWheeler extends Vehicle {
    constructor(i: number, m = "Honda", private model = "Civic") {
        super(i, m);
    }

    start() {
        return `${super.start()}\nModel is: ${this.model}`;
    }

    move(): void {
        console.log("Moving like a car....");
    }
}

var v = new FourWheeler(1);
console.log(v.start());
v.move();
