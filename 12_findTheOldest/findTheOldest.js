const findTheOldest = function(people) {
    const today = new Date();
    const year = today.getFullYear();

    let agesOfPeople = people.map(function (person) {
        if (!person.hasOwnProperty('yearOfDeath')) {
            person.age = year - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
    })

    let oldestPerson = people.reduce((p1, p2) => p1.age > p2.age ? p1 : p2);

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
