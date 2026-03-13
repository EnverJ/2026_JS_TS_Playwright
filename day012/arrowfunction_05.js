// arrow function: =>
// has no name: anonymous function
// used in callback function
//no need to add function keyword

// 1. no parameters arrow function
let print = () => console.log('hello js');
print() // hello js

// 2.1 param arrow function

let printName = (name) => console.log(name);
printName('Arizona') // Arizona

console.log('----------');
let test = (a)=> console.log(a+10);
test(10) // 20

console.log('---------');
let printNum = (num) => console.log(`total ${num + 100}`);
printNum(40) // total 140

console.log('--------');
let printTotal = (total)=>console.log(total + 90 );
printTotal(90); //180
// or
let printTotalOnlyOneParameter = total => console.log(total+90);
printTotalOnlyOneParameter(90) // 180

let printBilling = (billing) => {
    console.log(billing+90);
    console.log('billing is done');
    console.log('bye!!!');
}
printBilling(200)

// 290
// billing is done
// bye!!!
console.log('--------');
let pro = (a) => a + 4;
let r1 = pro(100)
console.log(r1); // 104

console.log('------');

/**
 * 
 * @param {string} name 
 * @returns 
 */
let doLowerCase = (name) => name.toLowerCase()
let lowerVar = doLowerCase('TESTING')
console.log(lowerVar); // testing

console.log('--------');
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns this will return two numbers
 */
let sum = (a,b) => a + b;
let p1 = sum(10,20);
console.log(p1); // 30

console.log('------------');

let initBrow = (browserName) => {
    console.log(`trying to launch ${browserName}`);
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('Launch chrome');
            return true;
        case 'edge':
            console.log('Launch edge');
            return true;
        case 'firefox':
            console.log('Launch chrome');
            return true;
        
    
        default:
            console.log('Please enter the right browser', browserName);
            return false;
    }

}

let flag = initBrow('chrome');
console.log(flag);

// trying to launch chrome
// Launch chrome
// true

let printDetails = (...details) =>{
    console.log(details);
    console.log(details.length);
    return 0; 
}
let s1 = printDetails('pavan', 'Jack','Noh')
console.log(s1);
// [ 'pavan', 'Jack', 'Noh' ]
// 3
// 0
