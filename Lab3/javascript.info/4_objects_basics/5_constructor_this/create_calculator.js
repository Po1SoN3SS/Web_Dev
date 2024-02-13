let Calculator = function () {

    this.read = function () {
        this.a = Number(prompt("Введите число a", 0));
        this.b = Number(prompt("Введите число b", 0));
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}


let calculator = new Calculator();
calculator.read();

alert("Sum = " + calculator.sum());
alert("Mul = " + calculator.mul());