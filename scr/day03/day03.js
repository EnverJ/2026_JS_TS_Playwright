//concat --  merge -- add
let a = 10;
let b = 20;
console.log(a+b);

console.log('hello' + 'playwright');
let x = 'hello'
let y = 'playwright';

console.log(a + b + x + y);
console.log(x + y + a + b);
console.log(x + y +(a+b));

console.log('the valueof a is '+ a); // the valueof a is 10

console.log("the value of b : "+ b); // the value of b : 20
console.log('the sum is '+ a+b); // the sum is 1020
console.log('the sum is ' + (a+b)); // the sum is 30


// 2. template literal
// back tick: ``
let mesg = `this is enver`
console.log(mesg); // this is enver

let paragraph = `hi this is my js code
                     I love js
                     I want to learn playwright`;
console.log(paragraph);
// hi this is my js code
//                     I love js
//                     I want to learn playwright

 // output: I love 'javascript' coding
 console.log('I love `javascript` coding'); // I love `javascript` coding
 console.log('I love \'javascript\' coding'); // I love 'javascript' coding
 console.log("I love 'javascript' coding"); // I love 'javascript' coding
 console.log(`I love 'javascript' coding` ); // I love 'javascript' coding

 console.log(`hi, it's mu javascript code`); // hi, it's mu javascript code

 console.log(`the product name is 'macbook' and price is '1200$'`); // the product name is 'macbook' and price is '1200$'
 
// 3. back tick use for the dynamic values
let username =  `admin`
console.log('welcome '   + username); // welcome admin
console.log(`welcome ${username}`) // welcome admin

let prodName = 'Apple iMac'
let price = 1002.33
console.log(`the search product is ${prodName} and the price is ${price}`); // the search product is Apple iMac and the price is 1002.33

let playerName = 'Enver J'
//button[text()='Enver J']
console.log(`//button[text()=${playerName}]`); // //button[text()=Enver J]
console.log(`//button[text()='${playerName}]'`); // //button[text()='Enver J]'

let n1 = 100;
let n2 = 200;
console.log(`the sum of ${n1} and ${n2} is ${n1 + n2}`); // the sum of 100 and 200 is 300
console.log(`the sum of n1 and n2 is ${n1 + n2}`); // the sum of n1 and n2 is 300

let emailId = 'Automation@gmail.com';
let userPassword = 'testing@123';
console.log(`user credentials:
    userName: ${username}
    userPassword: ${userPassword}`);   
    // user credentials:
   // userName: admin
   // userPassword: testing@123

   let str = `hi  this is enver here`
   console.log(typeof str); // string

   console.log(emailId, userPassword, 'enver'); // Automation@gmail.com testing@123 enver

   console.log('testing'); // testing

   // '' or "" -- normal string -- static string
   // dynamic string --> ``
   // ${} --> place holder
   


    
