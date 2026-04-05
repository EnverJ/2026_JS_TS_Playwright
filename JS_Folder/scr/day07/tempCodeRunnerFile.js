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
console.log(marks.indexOf(1,a+1));