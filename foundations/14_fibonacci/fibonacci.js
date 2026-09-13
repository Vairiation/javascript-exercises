const fibonacci = function(x) {
    let index = parseInt(x);
    if (index === 0) return 0;
    if (!index || index < 0) return 'OOPS';
    let first = 1;
    let second = 0;
    for (let i = 2; i <= index; i++) {
        let sum = first + second;
        second = first;
        first = sum;
    }
    return first;
};

console.log(fibonacci(3.4));

// Do not edit below this line
module.exports = fibonacci;
