let str = 'hello';
console.log(str.length); // 5

console.log(str.indexOf('h')); // 0
console.log(str.indexOf('p')); // -1
console.log(str.indexOf('l')); // 2

console.log(str.lastIndexOf('l')); // 3
console.log(str.includes('ell')); // true

console.log(str.startsWith('he')); // true
console.log(str.endsWith('lo')); // true

// slice,
// start >= end
console.log(str.slice(1,3)); // el
console.log(str.slice(-3)); // llo
console.log(str.slice(-1)); // o
console.log(str.slice(-5)); // hello
console.log(str.slice(-4, -1)); // ell
console.log(str.slice(-3,-1)); // ll
console.log(str.slice(-5, -3)); // he
console.log(str.slice(-4, 4)); // ell
console.log(str.slice(-5,3)); // hel
console.log(str.slice(0)); // hello
console.log('---------');
console.log(str.slice(0,-5)); // no output

console.log(str.substring(1,3)); // el

let st = 'playwright';
console.log(st.charAt(0)); // p
console.log(st.charAt(-1)); // no output

 // A-Z : 65 TO 90
 // a-z : 97 to 122
 // 0-9: 48 to 57
console.log('A'.charCodeAt()); // 65
console.log('a'.charCodeAt()); // 97
console.log('abc'.charCodeAt(2)); // 99
console.log(' '.charCodeAt()); // 32
console.log('$'.charCodeAt()); // 36

console.log(st.toUpperCase()); // PLAYWRIGHT
console.log(st.toLocaleLowerCase()); // playwright

console.log('  hello  '.trim()); // hello
console.log('       hello  '.trimStart()); // hello  
console.log('    hello     '.trimEnd()); //     hello

// replace:
console.log('hi hi'.replace('hi', 'hey')); // hey hi
console.log('hi hi'.replaceAll('hi', 'hey')); // hey hey

let dob = '01-01-1990';
console.log(dob.replaceAll('-','/')); // 01/01/1990

// concatenations
console.log('hollo'.concat(" ", " Selenium", " Automation")); // hollo  Selenium Automation

// padding: 
console.log('7'.padStart(3,0)); // 007
console.log('7'.padEnd(2,0)); // 70

// repeat:
console.log('ha'.repeat(3)); // hahaha

// split:
let lang = 'java_python_ruby';
let lg = lang.split('_');
console.log(lg[0]); // java











