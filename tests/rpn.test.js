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

/*
test("two numbers and an operand should give the correct result", (t) => {
    const rpnExpression = "1 2 +";

    t.equal(compute(rpnExpression), 3, "1 + 2 = 3");

    t.end();
})*/