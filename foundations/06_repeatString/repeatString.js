const repeatString = function(str, repetitions) {
    let repeat = '';
    if (repetitions < 0) return 'ERROR';
    for (let i = 0; i < repetitions; i++) {
        repeat += str;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
