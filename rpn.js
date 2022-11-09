
function parseRpnExpression(rpnExpression){
    return rpnExpression.split(" ")
        // Parse numbers and leave operands as strings
        .map((elem) => {
            const parsed = Number.parseInt(elem);
            return isNaN(parsed) ? elem : parsed;
        })
        // Remove empty string if there are some
        .filter((elem) => elem);
}

function compute(rpnExpression) {
    if(!rpnExpression){
        return 0;
    } else {
        const stack = [];
        const parsedExpression = parseRpnExpression(rpnExpression);

        parsedExpression.forEach(element => {
            switch (element) {
                case "+":
                    stack.push(stack.pop() + stack.pop());
                    break;
                case "*":
                    stack.push(stack.pop() * stack.pop());
                    break;
                case "-":
                    const temp = stack.pop()
                    stack.push(stack.pop() - temp);
                    break;
                default:
                    stack.push(element);
            }
        });

        return stack[0];
    }

    
}


module.exports = {compute, parseRpnExpression}