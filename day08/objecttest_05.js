let u1 = {
    name: "Tom",
    age: 30,
    city: "LA"
}

let u2 = {
    name: "John",
    age: 40,
    city: "SF",
    country: "US"
}

// u1 = u2;
// console.log(u1.name);  // John
// console.log(u1.age); // 40
// console.log(u1.country); // US

// console.log('-------');
// console.log(typeof u2); // object


// let u3= {};
// console.log(u3); // {}

// u3 = u1;
// console.log(u3); // { name: 'John', age: 40, city: 'SF', country: 'US' }

let u3 = {};
u1= u3;
console.log(u1);
