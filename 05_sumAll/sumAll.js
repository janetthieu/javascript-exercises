const sumAll = function(x, y) {
    let values = x < y ? x : y;
    let highestValue = x < y ? y : x;
    let sum = 0;

    if (x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y))
        return 'ERROR';

    for (let i = 0; i < highestValue; i++) {
        sum += values;
        values++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
