
function compute(rpnExpression) {
    if(!rpnExpression){
        return 0;
    } else {
        return Number.parseInt(rpnExpression);
    }
}


module.exports = compute