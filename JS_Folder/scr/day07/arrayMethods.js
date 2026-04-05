let num = [10, 20, 30, 40]
console.log(num.length); // 4
console.log(num); // [ 10, 20, 30, 40 ]
// .push() --- will be added after the hi, at the end
num.push(50); // will be added after the hi, at the end
console.log(num.length); // 5
console.log(num); // [ 10, 20, 30, 40, 50 ]

// .unshift() --- will be added at the li, at the oth index
num.unshift(5); // will be added at the li, at the oth index
console.log(num.length); // 6
console.log(num); // [ 5, 10, 20, 30, 40, 50 ]


// pop ---- remove the last element
let i = num.pop(); // remove the last element
console.log(num.length); // 5
console.log(num); // [ 5, 10, 20, 30, 40 ]
console.log(i); // 50

console.log('---------');
// remove the first value
num.shift();
console.log(num); // [ 10, 20, 30, 40 ]

console.log('----------');
// splice:
let fruits = ['apple', 'grapes', 'banana', 'cherry'];
console.log(fruits); // [ 'apple', 'grapes', 'banana', 'cherry' ]
fruits.splice(0,1,'melon');
console.log(fruits); // [ 'melon', 'grapes', 'banana', 'cherry' ]
fruits.splice(0,2);
console.log(fruits); // [ 'banana', 'cherry' ]
fruits.splice(0,2,'water melon');
console.log(fruits); // [ 'water melon' ]
fruits.splice(0,1,'pear','lime')
console.log(fruits); // [ 'pear', 'lime' ]
fruits.splice(0,0,'pineapple')
console.log(fruits); // [ 'pineapple', 'pear', 'lime' ]
fruits.splice(fruits.length-1,0,'banana');
console.log(fruits);

console.log('--------------');
let marks = [1,2,3,4,1,5,6,1];
console.log(marks.indexOf(1)); // 0
console.log(marks.indexOf(4)); // 3
console.log(marks.indexOf(100)); // -1

console.log(marks.indexOf(1)); // 0 1st occurrence of first 1
console.log(marks.indexOf(1,1)); // 4 -- hard coded. not recommended. 
console.log(marks.indexOf(1,marks.indexOf(1)+1)); //4
let a = marks.indexOf(1,marks.indexOf(1)+1);
console.log(a);
console.log('++++++++');
console.log(marks.indexOf(1,a+1)); //7


console.log('----------');
let myFruits = ['apple', 'grapes', 'banana', 'apple', 'cherry', 'apple'];
console.log(myFruits.indexOf('apple')); //0
console.log(myFruits.indexOf('apple',1)); // 3
console.log(myFruits.indexOf('apple', myFruits.indexOf('apple')+1)); // 3. -- 2nd occurrence of apple
let p = myFruits.indexOf('apple', myFruits.indexOf('apple')+1);
console.log(myFruits.indexOf('apple', 4)); // 5

console.log(myFruits.indexOf('apple', p+1)); // 5














