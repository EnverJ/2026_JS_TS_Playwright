"use strict";
// let var const
let num = 100;
console.log(num);
console.log(typeof num); // number
let userName = 'admin';
console.log(userName);
let isActive = true;
console.log(isActive); // true
isActive = false;
console.log(isActive); // false
let user = null;
let x1 = undefined;
let distance = 100n;
console.log(distance + 10n);
let test;
test = 100;
test = 'enver';
test = true;
console.log(test);
console.log(typeof test); // boolean
let value = "Hello";
console.log(value); // Hello
console.log(typeof value); // string
// void : never return anything
function testing() {
    console.log('Hello testing');
}
testing();
console.log(typeof testing); // function
function getMarks(stName) {
    console.log(stName, 100);
    console.log(stName.length);
}
getMarks("Tom"); //Tom 100
// never: representing a value never occur, will never happen..., infinite loop
// function throwElementError(locator:string):never{
//     throw new Error(locator + " is not found error")
// }
//throwElementError('login'); // Error: login is not found error
// function environmentNotFoundError(enName:string):never{
//     throw new Error(" Invalid Env: "+ enName)
// }
// environmentNotFoundError('uat'); //   Invalid Env: uat
//union types:
let id;
id = "Enver";
id = 100;
console.log(id); // 100
// arrays:
let marks = [10, 20, 30, 40];
console.log(marks); // [ 10, 20, 30, 40 ]
console.log(marks.length); // 4
let devices = ['macbook pro', 'airtel sim', 'iphone17'];
// Array<string>
let names = ['Tom', 'Jeff', 'Nick', 100];
let salary = [100, 98, 99, 200];
// tuple: the fix length array with the specific types:
let myUser = ["Elephant", 25.8];
console.log(myUser); // [ 'Elephant', 25.8 ]
let person = ['Tom', 'Automation', 100, true];
