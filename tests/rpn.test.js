const test = require('tape');
const compute = require('../rpn');


test("empty string returns 0", function(t) {

    const rpnExpression = "";

    t.equal(compute(rpnExpression), 0, "Empty expression should equal zero");

    t.end();
});