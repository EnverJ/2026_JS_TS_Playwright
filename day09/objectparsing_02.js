// object --> JSON : serialization
// JSON --> Object : deserialization


// API automation:
// POST call : url, json

// JSON --> Javascript object notations
// user object in js
// user object in js --> JSON String
// api response (json) --> JS object


let user = {
    name : 'Tom',
    age:30,
    city : 'LA', 
    isActive : true,
    address : {
        flat : 10101,
        zipCode: 90909, 
        lat : 10.34,
        long : 11.22
    },
    devices: ['iphone', 'mouse', 'keyboard']
};

// let userJson = JSON.stringify(user,null,2); // formatted
let userJson = JSON.stringify(user);

console.log(userJson);
// {"name":"Tom","age":30,"city":"LA","isActive":true,"address":{"flat":10101,"zipCode":90909,"lat":10.34,"long":11.22},"devices":["iphone","mouse","keyboard"]}
console.log(typeof userJson); // string


console.log('-------------');
// reverse: JSON string to JSON Object: de-serialization
let userObject = JSON.parse(userJson);
console.log(userObject);

// {
//   name: 'Tom',
//   age: 30,
//   city: 'LA',
//   isActive: true,
//   address: { flat: 10101, zipCode: 90909, lat: 10.34, long: 11.22 },
//   devices: [ 'iphone', 'mouse', 'keyboard' ]
// }
console.log(typeof userObject); // object
console.log(user.name ===userObject.name); // true


console.log('-------------------------');

let customer = {
    name : 'Tom',
    age:30,
    city : 'LA', 
    isActive : true,
    address : {
        flat : 10101,
        zipCode: 90909, 
        lat : 10.34,
        long : 11.22
    },
    devices: ['iphone', 'mouse', 'keyboard']
};

let customerString = JSON.stringify(customer)
console.log(customerString);
console.log(typeof customerString); // string

// reverse: JSON string to JSON Object
let customerObj = JSON.parse(customerString);
console.log(customerObj);
console.log(typeof customerObj); // object
console.log(customer.devices.length === customerObj.devices.length); // true
console.log(customer.address.flat === customerObj.address.flat); // true



