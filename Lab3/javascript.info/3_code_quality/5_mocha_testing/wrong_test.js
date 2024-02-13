describe("Raises x to power n", function () {
    const base = 5

    it("x^1 = x", function () {
        assert.equal(pow(base, 1), base);
    });

    it("x^2 = x * x", function () {
        assert.equal(pow(base, 2), base * base);
    });

    it("x^3 = x * x * x", function () {
        assert.equal(pow(base, 3), base * base * base);
    });
});