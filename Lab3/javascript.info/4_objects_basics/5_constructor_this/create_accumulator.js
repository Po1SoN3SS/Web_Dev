let Accumulator = function (initialValue) {
    this.value = initialValue;

    this.read = function () {
        this.value += Number(prompt("Введите прибавку", 1));
    };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values