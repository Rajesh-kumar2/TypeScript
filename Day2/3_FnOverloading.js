function Hello() {
    function M1() {
        console.log("Hello World");
    }
    function M2(name) {
        console.log("Hello,", name);
    }
    // console.log(arguments);
    switch (arguments.length) {
        case 0:
            M1();
            break;
        case 1:
            M2(arguments[0]);
            break;
        default:
            throw 'No Method Implementation';
    }
}
Hello();
Hello("Manish");
