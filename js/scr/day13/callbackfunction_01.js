// callback: a CB is a simple function passed ad an argument to another function
// which bill be call later
// call by value
// call by obj ref
// call by function : callback
let sayHi = function () {
    console.log('Hi');
}

let sayHello = function (callback) {
    callback();
}

sayHello(sayHi) // hi

console.log('===========');

// core function: end user function
let add = (a, b)=> a + b;
let sub = (a,b)=> a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

function calculator(a , b, callback) {
    return callback(a, b);

}
let r1 = calculator(10,20, add)
console.log(r1); // 30
calculator(20,10, sub)
r1 = calculator(100, 50, sub)
console.log(r1); // 50
r1 = calculator(10,5, div)
console.log(r1); // 2
r1 = calculator(10, 300,mul)
console.log(r1); // 3000


console.log('============');
function initDriver(browserName){
    console.log('Browser name: ', browserName);
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('launch chrome');
            return true;
        case 'edge':
            console.log('launch edge');
            return true;
        case 'firefox':
            console.log('launch firefox');
            return true;
    
        default:
            console.log('please enter the right browser name: ', browserName);
            return false;
    }
};

function enterUrl(browserName, url,callback){
    console.log('starting the test case execution...');

    if (callback(browserName)){
    console.log('enter the url', url);
    }

};
enterUrl('ie', 'www.google.com', initDriver);
// starting the test case execution...
// Browser name:  ie
// please enter the right browser name:  ie

console.log("===========");

function myCalc(a, b, callback){
    return callback(a,b)
}
let c1 = myCalc(10,20, (a, b)=> a+b);
console.log(c1); // 30

console.log("===========");

function launchBrowser(browserName, callback){

   return  callback(browserName);
}

let flag = launchBrowser('chrome', (browserName)=> {
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('launch chrome');
            return true;
        case 'edge':
            console.log('launch edge');
            return true;
        case 'firefox':
            console.log('launch firefox');
            return true;
    
        default:
            console.log('please enter the right browser name: ', browserName);
            return false;
    }
});  // launch chrome

if(flag){
    console.log('Enter the url'); // Enter the url
}

console.log("==========");
let num = [1,2,3,4,5]
num.forEach(e => console.log(e))
let nm = num.filter(e => e> 3);
console.log(nm); [ 4, 5 ]

console.log('========');
function calculator2(mycallback,...x){
    console.log(mycallback(...x));

}

let addition = (...a) => {
    sum = 0; 
    for (i = 0; i < a.length; i++){
        sum = sum + a[i]
    }
    return sum;
};

calculator2(addition, 1,2,3,4) //10
