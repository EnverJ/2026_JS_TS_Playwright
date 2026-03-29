
//async -await
// async function: async keyword as prefix
// it always return a promise(generally)
// inside the async function body: we have to write multiple await (asynchronous/promise) steps

async function hello(){
    return 'hello world'
}

hello().then(res => console.log(res)); // hello world

function fetchData(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('user data')
        },3000)
    })
};

async function getData(){
    console.log('fetching data...');
   let result =  await fetchData();
   console.log(result);
}

getData();

console.log('=========================');
function startMachine(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('machine started');
            resolve()
        },5000)
    })
}

function grindBeans(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('grinding coffee beans');
            resolve()
        },3000)
    })
}

function boilWater(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('boiling water');
            resolve()
        },2000)
    })
};

function brewCoffee(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Brewing the coffee');
            resolve()
        },3000)
    })
};

function pourCoffee(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('poring the coffee into cup');
            resolve()
        },1000)
    })
};

startMachine()
            .then(()=>grindBeans())
            .then(()=>boilWater())
            .then(() => brewCoffee())
            .then(()=>pourCoffee())
            .then(()=>console.log('coffee is ready'))
            .finally(()=> console.log('Go back to your desk!!!'));


console.log("============");
async function makeCoffee(){
    await startMachine();
    await grindBeans();
    await boilWater();
    await brewCoffee();
    await pourCoffee();
    console.log('coffee is ready......');
}

makeCoffee();

// 

function waitForElement(locator, timeout){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let isElementFound = true;
            if(isElementFound){
                let webElement = `driver.findElement(${locator})`;
                resolve(webElement);
            }
            else{
                reject(null)
            }
        },timeout)
    })

}

function click(element){
    console.log(`click on the element ${element}`);
}

waitForElement('#loginBtn', 5000)
                                .then((element => click(element)))
                                .catch(error => console.log('element not found ....'));
// click on the element driver.findElement(#loginBtn)