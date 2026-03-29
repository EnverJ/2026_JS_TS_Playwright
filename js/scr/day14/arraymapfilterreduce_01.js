// 1. map : transform every element of given array
// return : returns  a new array
let number = [1,2,3,4,5]
let num = number.map(e => e * 2);
console.log(num); // [ 2, 4, 6, 8, 10 ]

let sqrt = number.map( e => e * e);
console.log(sqrt); // [ 1, 4, 9, 16, 25 ]

let empNames = ['john', 'josh', 'sam', 'sean']
let namesUpper = empNames.map(n => n.toUpperCase());
console.log(namesUpper); // [ 'JOHN', 'JOSH', 'SAM', 'SEAN' ]

// 2. filter: remove all the elements on the basis of given condition
let numbers = [10, 25, 30, 45, 50]
let grThan = numbers.filter(n => n > 30);
console.log(grThan); // [ 45, 50 ]

let evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [ 10, 30, 50 ]

let names = ['josh', 'enver', 'naman', 'abdulla','on','ll']
let grLength = names.filter(n => n.length > 3);
console.log(grLength); // [ 'josh', 'enver', 'naman', 'abdulla' ]

let productData = ['apple macbook', 'apple iph', 'samsung galaxy', 'canon', 'apple air']
let appleProduct = productData.
                               filter(n => n.startsWith('apple')).
                                          filter(n => n.includes('iph')).
                                                                         map(n => n.replace('iph', 'iphone'));
console.log(appleProduct); [ 'apple iphone' ]

// 3. reduce : combine everything into ONE value
// it will return a single value
let numData = [10, 20, 30, 40, 50];
let total =numData.reduce((sum , n) => sum + n, 0);
console.log(total); // 150

let empAddress = ['500', 'eastman', 'la', 'US'];
let address = empAddress.reduce((address, word) => address + word + " ", "");
console.log(address); // 500 eastman la US

//chain all the methods:
//number array: even --> square them -->sum
let myNum = [1,2,3,4,5,6,7,8,9,10];
let mySum = myNum.filter(n => n % 2 === 0).
                               map(n => n * n ).
                                                reduce((sum, n) => sum + n, 0);
console.log(mySum); // 220


