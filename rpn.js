
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
        return Number.parseInt(rpnExpression);
    }
}


module.exports = {compute, parseRpnExpression}