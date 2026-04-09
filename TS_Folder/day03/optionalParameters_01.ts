

// optional parameters: using?, always last param

function printData(name: string, age?:number): void{
    console.log(name);
    console.log(age);

}

printData("peter");// peter undefined
printData("Tom", 30); // Tom 30

function launchBrowser(browser: string, headless?:boolean):boolean{
    if(headless){
        console.log("run the test cases in ", browser , ' in', headless);
        return true;
    }
    else{
        console.log("run the test case in the normal mode on ", browser);
        return true;
    }

}
launchBrowser("chrome");// run the test case in the normal mode on  chrome
launchBrowser("edge", true); // run the test cases in  edge  in true

// 1. normal params
// 2. optional params
//3. rest params
function search(productName: string, color:string, price?:number, seller?:string, ...values:any[]):void{
    console.log(values);
    if(price && seller){
        console.log("performing the search on the basis of ", productName, color, price, seller);

    }
    else{
        console.log("performing the search on the basis of ", productName, color);

    }

};
search("polo", "white", 100, "mart ltd"); // performing the search on the basis of  polo white 100 mart ltd

// function overloading: different function with the same name and diff params

// design proto+type:signature
function combination(a:number, b:number):number;
function combination(a:string, b:string):string;
function combination(a:number, b:string):string;


// only one
function combination(a:any, b:any):any{
    return a + b;
}

// calling
console.log(combination(2,3));// 5
console.log(combination("US", "A"));// USA
console.log(combination(2,"india")); //2india


