QUnit.test("Arbitraritly Nested Arrays Test", function (assert) {
    var arbitrarilyNestedArrays = [[1, 2, [3]], 4];
    var expected = [1, 2, 3, 4];
    var actual = flatInteger(arbitrarilyNestedArrays);
    assert.equal(expected, expected, "Expected value: " + expected + " | Actual value: " + expected);
});