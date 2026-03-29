// if else 
// if elseif else
// nested if
// switch case

let x = 1;
if (x>=10){
    console.log('hi');
}
else{
    console.log('bye');
}

console.log('---------');
if(true){
console.log('hello');
}
else{
    console.log('unreachable code');
}


console.log('------');
let isElementExsit=false;
if (isElementExsit){
    console.log('click on the element');
}
else{
    console.log('throw error');
}

console.log('------');

let marks = 99;
if (marks >= 90){
    console.log("A grade");
    if (marks >= 95){
        console.log("A++ grade");

        if(marks == 100){
            console.log('scholarship');
        }
        else{
            console.log("Not eligible for scholarship");
        }

    }

}
else{
    if(marks<=80){
    console.log("B grade");
    }
    else{
        console.log("Grade B ++");
    }
}

console.log('parallel if if if else -----');
let browser = 'chrome'
if (browser === "chrome" ){
console.log("Launch chrome");
}
if(browser==='edge'){
console.log('launch edge');
}
if(browser === "safari"){
console.log("Launch safari");
} 
else{
    console.log("plz enter the right browser: "+ browser);
}

console.log('if elseif else if -----');

let browserName = "pojo";
if (browserName === "chrome"){
    console.log("launch chrome");
}
else if (browserName === "edge"){
console.log("launch edge");
}
else if (browserName === "safari") {
}
else{
    console.log("please enter right browser: "+ browserName);
}
