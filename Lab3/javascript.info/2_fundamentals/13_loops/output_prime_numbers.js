let n = 10;

findPrime:
    for (let i = 2; i <= n; i += 1) {

        findDivisors:
            for (let j = 2; j < i; j += 1) {
                if (i % j === 0) continue findPrime;
                // делится нацело, не простое число
            }

        alert(i);
    }
