let calculator = {
    a: 0,
    b: 0,

    read() {
        this.a = Number(prompt("Введите число a", 0));
        this.b = Number(prompt("Введите число b", 0));
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());