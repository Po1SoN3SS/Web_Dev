function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i += 1) {
        result *= x;
    }

    return result;
}

let x = Number(prompt("Enter x", 0));
let n = Number(prompt("Enter n", 0));

if (n < 1) {
    alert("n must be greater than 1.")
} else {
    alert(pow(x, n))
}