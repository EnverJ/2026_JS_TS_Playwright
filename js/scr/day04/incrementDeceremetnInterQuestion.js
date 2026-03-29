let i = 11;
let j = i++ + ++i;
console.log(i); // 
console.log(j); // 

let a = 11, b =22;
let c = a + b + a++ + b++ + ++a + ++b;
console.log('c: ' + c); // 103
console.log('a: ' + a); // 13
console.log('b: ' + b); // 24

let k = 0;
let f= k++ - --k + ++k - k--;
console.log(k); // 0
console.log(f); // 0

let p = 1;
console.log(p++); // 1
console.log(++p); // 3
console.log(p==3);


