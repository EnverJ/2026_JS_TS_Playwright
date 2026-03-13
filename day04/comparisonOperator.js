// compare two values
// == : loose equality: compare the value only
// === : Strick equality: compare both value and type

console.log(10 == 10); // true
console.log(10 =='10'); // true
// ===
console.log(10 === 10); // true 
console.log(10 === '10'); // false

let bill = '1000'
console.log(bill === 1000); // false

console.log('10' === "10");  // true

// true or 1
// false or 0
console.log(true == 1); // true
console.log(true === 1); // false
console.log(true == '1'); // true
console.log(true ==='1'); // false

console.log(false == 1); // false
console.log(false === "1"); // false
console.log(false == 0 ); // true
console.log(false === 0); // false

console.log('john' =='John'); // false
console.log('john' === 'John'); // false
console.log('a' == 'A'); // false


