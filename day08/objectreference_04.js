let u1 = {
    name : 'Tom',
    age:30,
    city : 'LA'

};

let u2 = {
    name : 'Ann',
    age:20,
    city : 'SF'

};

let u3 = {
    name : 'John',
    age:40,
    city : 'NY'

};

console.log(u1);
console.log(u2);
console.log(u3);

//{ name: 'Tom', age: 30, city: 'LA' }
// { name: 'Ann', age: 20, city: 'SF' }
// { name: 'John', age: 40, city: 'NY' }

console.log('----------');
u1=u2;
console.log(u1);
console.log(u2);
console.log(u3);

// { name: 'Ann', age: 20, city: 'SF' }
// { name: 'Ann', age: 20, city: 'SF' }
// { name: 'John', age: 40, city: 'NY' }

console.log('--------');

u2 = u3;

console.log(u1); // { name: 'Ann', age: 20, city: 'SF' }
console.log(u2); // { name: 'John', age: 40, city: 'NY' }
console.log(u3); // { name: 'John', age: 40, city: 'NY' }

console.log('-----');
u3= u1;
console.log(u1); // { name: 'Ann', age: 20, city: 'SF' }
console.log(u2); // { name: 'John', age: 40, city: 'NY' }
console.log(u3); // { name: 'Ann', age: 20, city: 'SF' }

