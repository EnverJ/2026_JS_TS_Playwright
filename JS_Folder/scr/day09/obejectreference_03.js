let user = {
    name : 'Tom',
    age:30,
    city : 'LA',
    isActive: true

};
console.log(user.name); // Tom
user = null;
console.log(user.name); // TypeError: Cannot read properties of null (reading 'name')

let u1 = {
    name : 'Jack',
    age:30,
    city : 'Kashgar',
    isActive: true

};

