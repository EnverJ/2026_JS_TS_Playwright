// kind of collection of different or similar type of data in js
// Array: []
// homogenous array
let num = [10, 20 , 30 , 40 ];
console.log(num[-1]); // undefined
console.log(num); // [10, 20 , 30 , 40 ];
console.log(num[0]); // 10
console.log(num[4]); // undefined

console.log(num.length); // 4

console.log("li = "+ 0);
console.log("hi = " + (num.length-1)); // 3


// adding
num[4] = 50;
console.log(num); // [ 10, 20, 30, 40, 50 ]
console.log(num.length); // 5

num[10] = 100;
console.log(num); // [ 10, 20, 30, 40, 50, <5 empty items>, 100 ]
console.log(num[9]); // undefined
console.log(num[10]); // 100


num[8] = 900;
console.log(num); // [ 10, 20, 30, 40, 50, <3 empty items>, 900, <1 empty item>, 100 ]


console.log('---------------');
let sName= ['Tom', 'Ravi']
console.log(sName); // [ 'Tom', 'Ravi' ]
sName[0] = "naveen";
console.log(sName); // [ 'naveen', 'Ravi' ]

sName[5] = "Rohit";
console.log(sName); // [ 'naveen', 'Ravi', <3 empty items>, 'Rohit' ]

console.log('-------------------------');
// heterogenous array
let empData = ['josh', 30, 'SDET-1', 'IBM', 100, true];
console.log(empData); // [ 'josh', 30, 'SDET-1', 'IBM', 100, true ]

console.log(typeof empData); // object

console.log('---------------');
const p = [10,20,30];
p[0] = 500;
console.log(p);

// const p =[1,2,3,4];
// console.log(p);  // duplicate value

// p = [12,23,34];
// console.log(p); // duplicate value not allowed

p[3] = 40;
console.log(p); // [ 500, 20, 30, 40 ]


console.log('------------------');
let product = ['mac', 'win', 'imac','sumsung']
console.log(typeof product);  // object

console.log('-----------------');
let nm = Array.of(1,2,3,4);
console.log(nm); // [ 1, 2, 3, 4 ]

let pro = Array.from('playwright');
console.log(pro);
//  [
//    'p', 'l', 'a', 'y',
//    'w', 'r', 'i', 'g',
//    'h', 't'
//  ]








