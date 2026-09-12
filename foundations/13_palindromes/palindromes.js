const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const filteredString = string
        .toLowerCase()
        .split('')
        .filter(character => alphanumerical.includes(character))
        .join('');
    const reverse = filteredString
        .split('')
        .reverse()
        .join('');
    return filteredString === reverse;
};

// Do not edit below this line
module.exports = palindromes;
