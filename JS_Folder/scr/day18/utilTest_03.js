// do not need to include default in {}
//import  print, {name, add, test, flag } from './util_02.js' 

// or

import  naveen, {username, add as sum, test, flag, addTwoNum } from './util_02.js' 
import { getRandomNumber } from './stringUtils_03.js';

// or
// import * as utils from './util_02.js';
// console.log(utils.username, utils.flag);  // Tom, true



console.log(username); // Tom
console.log(sum(10,20)); //30
test(); // test
console.log(flag);
//print(); // printing something ...
naveen(); // printing something ...

console.log(getRandomNumber()); // 100
console.log(addTwoNum(100,200)); // 300

export function rest(){
    console.log('rest method');

}