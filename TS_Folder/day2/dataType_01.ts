// let var const
let num: number = 100;
console.log(num);

console.log(typeof num); // number

let userName : string = 'admin';
console.log(userName);

let isActive : boolean = true;
console.log(isActive); // true
isActive = false;
console.log(isActive); // false

let user : null = null;
let x1 : undefined = undefined;

let distance : bigint = 100n;
console.log(distance + 10n);

let test: any;
test =100;
test = 'enver';
test = true;
console.log(test);
console.log(typeof test); // boolean


let value : unknown = "Hello";
console.log(value); // Hello
console.log(typeof value); // string


// void : never return anything
function testing() : void {
    console.log('Hello testing');
}

testing();
console.log(typeof testing);// function

function getMarks(stName: string) : void{
    console.log(stName,100);
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
let id : string|number;
id = "Enver";
id = 100;
console.log(id); // 100

// arrays:
let marks: number[] = [10, 20, 30, 40]
console.log(marks); // [ 10, 20, 30, 40 ]
console.log(marks.length);// 4

let devices: string[] = ['macbook pro', 'airtel sim', 'iphone17']

// Array<string>

let names: Array<string | number> = ['Tom', 'Jeff', 'Nick', 100];

let salary: Array<number> =[100, 98, 99, 200]

// tuple: the fix length array with the specific types:
let myUser: [string, number] = ["Elephant", 25.8];
console.log(myUser); // [ 'Elephant', 25.8 ]

let person: [string, string, number, boolean] = ['Tom', 'Automation', 100, true];

// objectL
// let newUser = {
//     name : 'naveen', 
//     salary : 100, 
//     isActive : true, 
//     city: 'la'
// }

// custom type for the objectL using type alias
type userType = {readonly name:string, salary: number, isActive:boolean, city:string, age:number};
let userObj:userType =
{
    name : 'naveen', 
    salary : 100, 
    isActive : true, 
    city: 'la'
}
console.log(userObj); // { name: 'naveen', salary: 100, isActive: true, city: 'la' }
userObj.salary = 99;
// userObj.name('enver');

userObj.age = 20;
console.log(userObj);

//
type orderType = string|number;
let orderID: orderType = 123;
orderID = '123';

type statusCodeType= string|number;

let statusCode: statusCodeType = 200;
statusCode = '200 OK'


let unauthStatusCode: statusCodeType = 401;
unauthStatusCode = "401 UnAuth"



