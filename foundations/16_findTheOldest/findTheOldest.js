function getAge(birth, death, currentYear) {
    return (death ?? currentYear) - birth;
}
const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    const array = people.slice().sort((a, b) => {
        const aAge = getAge(a.yearOfBirth, a.yearOfDeath, currentYear);
        const bAge = getAge(b.yearOfBirth, b.yearOfDeath, currentYear);
        return aAge - bAge;
    })
    return array[array.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
