const test = require('tape');
const {compute, parseRpnExpression} = require('../rpn');


test("empty string returns 0", function(t) {
    const rpnExpression = "";

    t.equal(compute(rpnExpression), 0, "Empty expression should equal zero");

    t.end();
});

test("a single number in the expression should equal that number", (t) => {
    const rpnExpression = "1";

    t.equal(compute(rpnExpression), 1, "Number in the expression should equal itself");

    t.end();
})

test("empty string is parsed as an empty table", (t) => {
    const rpnExpression = "";

    const parsedRpnExpression = parseRpnExpression(rpnExpression)
    t.equal(typeof parsedRpnExpression, typeof []);
    t.equal(parsedRpnExpression.length, 0);

    t.end();
})

test("a single number in a string is parsed as a number in a list of length one", (t) => {
    const rpnExpression = "1";

    const parsedRpnExpression = parseRpnExpression(rpnExpression);
    const expectedResult = [1];

    t.equal(parsedRpnExpression.length, expectedResult.length);
    for(let i = 0; i < expectedResult.length; i++){
        t.equal(parsedRpnExpression[i], expectedResult[i]);
    }

    t.end();
})

test("two numbers in a string are parsed as numbers in a list of length two", (t) => {
    const rpnExpression = "1 1";

    const parsedRpnExpression = parseRpnExpression(rpnExpression);
    const expectedResult = [1, 1];

    t.equal(parsedRpnExpression.length, expectedResult.length);
    for(let i = 0; i < expectedResult.length; i++){
        t.equal(parsedRpnExpression[i], expectedResult[i]);
    }

    t.end();
})

test("numbers and operands are parsed properly", (t) => {
    const rpnExpression = "1 11 +";

    const parsedRpnExpression = parseRpnExpression(rpnExpression);
    const expectedResult = [1, 11, "+"];

    t.equal(parsedRpnExpression.length, expectedResult.length);
    for(let i = 0; i < expectedResult.length; i++){
        t.equal(parsedRpnExpression[i], expectedResult[i]);
    }

    t.end();
})

test("two numbers and a + should give the correct result", (t) => {
    const rpnExpression = "1 2 +";

    t.equal(compute(rpnExpression), 3, "1 + 2 = 3");

    t.end();
})

test("two numbers and a * should give the correct result", (t) => {
    const rpnExpression = "1 2 *";

    t.equal(compute(rpnExpression), 2, "1 * 2 = 2");

    t.end();
})

test("two numbers and a - should give the correct result", (t) => {
    const rpnExpression = "2 1 -";

    t.equal(compute(rpnExpression), 1, "2 - 1 = 1");

    t.end();
})

test("two numbers and a / should give the correct result", (t) => {
    const rpnExpression = "4 2 /";

    t.equal(compute(rpnExpression), 2, "4 / 2 = 2");

    t.end();
})