// 1 to 10
// 1. while:
let i = 1;
while (i <= 10){
    console.log(i);
    i++;
   // ++i;
   // i = i + 1;
}

console.log('----Avoid------');
// while (true){
//     console.log('welcome to automation lab');

while (true){
    console.log("welcome to automation lab");
    break;

}

console.log('-------------');

let j = 1;
while (j <= 50){
    console.log(j);
    if (j % 5 == 0 ){
        console.log("Hello");
        break;

    }
    j++;
}

// for loop
// 1 to 10

for (let p = 1; p <= 10; p++){
    console.log(p);
    if (p == 9){
        break;
    }
}

for (let m = 10; m >=0; m--){
    console.log(m);

}

console.log('---valid------');
let n = 1;
for (; n<=10; n++){
    console.log(n);

}
let n2 = 1;
for (; n2<=10; ){
    console.log(n2);
    n2++;

}

console.log('----infinity loop-----');
for(;;){
    console.log("welcome to US");

}

console.log('------do while----');
// 1 to 10
let k =1;
do {
    console.log(k);
    k++;
}
while(k <=10);

console.log('------when to use while/ doWhile-----');
// use case of while loop: when number of iterations are not fixed
// 1. wait for element on the page: 0, 2, 3
// 2. wait for page loading
// 3. calendar: march 2027
// 4. web table page nations: 
// 4. infinite scrolling

// use case of for loop: when number of iterations are fixed
// drop down: month: 1 to 12
// date : 1 t0 31
// arrays: fixed


// use case for do while loop
// 1. element is already present on the page ... click on the element -- break it


// forEach, for of, for in

 


