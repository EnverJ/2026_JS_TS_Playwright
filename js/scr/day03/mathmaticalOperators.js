
// addition: +
console.log(1+1); // 2
console.log('1' + 1); // 11
console.log('1' + '1'); // 11
console.log(1 + '1'); // 11

// subtraction: -
console.log(1 - '1'); // 0 ---> 1-1 = 0
console.log(1- '-1'); // 2 
console.log('5' - 2); // 3
console.log('5' - '3'); // 2
console.log(5 - 'hello'); //NaN
console.log('hello' - 10); //NaN
console.log('hello'-'10'); //NaN
console.log('hello' - '10'); // NaN


// multiplication: *
console.log(1 * "1"); // 1
console.log(-1 + '1' *1); // 0
console.log(1+ "1");// 11
console.log(1 + '1' -2); // --> "11"-2 = 11 -2 =9

console.log(10 / '2'); // 5
console.log("10" / "2"); // 5
console.log(10 + "10"/2); // 15
console.log(10 + '10'+10); // "1010"+10=101010
console.log(10 - "10" - 10);//-10

// unary plus: + 
console.log('42' + 5);  //425
console.log(+'42'+5); // 47
console.log(5+'42'); // 542
console.log(5+ +"42"); // 47
console.log(+"5"+ +"42"); //47
console.log(+"42" -5); //37

let billAmount = '1000'
console.log(+billAmount + 100); // 1100
let val="test"
console.log(+val + 100); //NaN

// unary negation: -
console.log(-'42'+5);// -37
console.log(-billAmount+200);// 800


console.log(Number.parseInt(billAmount)); // 1000
console.log(Number.parseInt(billAmount)+ 200); //1200

let bmi = '17.88'
console.log(Number.parseFloat(bmi) + 100); // 117.88

console.log(-1+"1");//-11
console.log("1"-1); // 0
console.log(-"42"+ "5"); //-425
console.log(+"2" - -"2"); //4



// BODMAS (DMAS)rule: 











