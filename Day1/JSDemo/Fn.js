// function display() {
//     console.log(this);
// }

// // display();

// var employee = { id: 1, name: "Manish" };
// display.call(employee);

// // var employee = { id: 1, name: "Manish", display: display };

// // employee.display();

function Hello(name) {
    console.log("Hello, ", name);
}

Hello("Manish");
Hello();
Hello("Abhijeet", "Pune");