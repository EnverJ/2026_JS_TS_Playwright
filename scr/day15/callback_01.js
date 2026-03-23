// callback hell: pyramid of doom
// multiple asynchronous operations/tasks, they depend on each other ---- nested callback/indent callbacks

// hard to read
// hard to debug



// example: coffee machine

// 1. start the machine -- 5 secs
// 2. grind the beans -- 3 secs
// 3. boil water -- 4 secs
//4.  brew coffee -- 3 secs
// 5. pour into cup --> 2 secs

// setTimeout((name, age) => {
//     console.log('hello', name, age);
// }, 3000, 'josh', 30) // hello josh 30

// setTimeout(()=> 
//     {
//         console.log('account is created');
//     }, 4000)
//     // account is created


function startMachine(callback){
    setTimeout(()=>{
        console.log('Machine started');
        callback();
    }, 5000)

};

function grindBeans(callback){
    setTimeout(()=>{
        console.log('Grinding coffee beans');
        callback();
    }, 3000)

};

function boilingWater(callback){
    setTimeout(()=>{
        console.log('Boiling water');
        callback();
    }, 4000)

};

function brewCoffee(callback){
    setTimeout(()=>{
        console.log('Brewing coffee');
        callback();
    }, 3000)

};
function pourCoffee(callback){
    setTimeout(()=>{
        console.log('Pour coffee into cup');
        callback();
    }, 2000)

};

function stopMachine(callback){
    setTimeout(()=>{
          console.log('machine is off');
          callback();
    }, 5000)
}

// calling the functions, callback hell
startMachine(() =>{
    grindBeans(() =>{
        boilingWater(()=>{
            brewCoffee(() =>{
                pourCoffee(() => {
                    console.log('coffee is ready');
                })
            })
        })
    })
});


// async function makeCoffee(){
//     await grindBeans();
//     await boilingWater();
//     await brewCoffee();
//     await pourCoffee();
// }
// promises
// async await

