const test = require('tape');
const compute = require('../rpn');


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

