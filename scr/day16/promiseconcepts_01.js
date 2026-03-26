// Promise: is used to handle Async operation(things that takes time)
// ex:
// 1. api calls
// 2. file reading
//3. DB query
//4. AJAX: element us coming on the page 5 10 15 20


// instead oc callback, JS has introduced promises to handle the async operations in a cleaner way

// promise:
// you place the order: promise is created
// prepare the food: pending/in-progress
// food is delivered: Resolved / fulfillment
// cancel the order: Rejected / Error

// 3 states of promises: pending, Resolved/ Rejected

// create a promises
let myPromise = new Promise((myResolve,myReject) => {
    let success = false;
    if(success){
        myResolve('task completed - 200 OK');
    }
    else{
        myReject('task canceled - 500 error');
    
    }
});

myPromise
        .then((result) => {
            console.log(result);
        })
        .catch((error)=>{
            console.log(error);
        });


// Ex: real async operation: setTimeout: 3000 ms
let dataPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('data is not received from the server')
    },3000);
});

dataPromise
            .then((result)=>{
                console.log(result);
            })
            .catch((error)=>{
                console.log(error);
            }); // data is not received from the server

console.log('=========');
function fetchUser(){
    return new Promise((resolve, reject)=>{
        let flag = false
        if (flag){
        setTimeout(()=>{
            let user = {
                name: 'naveen',
                role: 'qa'
            };
            resolve(user);
        },5000)}
        else{
            setTimeout(()=>{
                reject('user not found: 404 NOT FOUND')
            },2000)
        }
    })
};
fetchUser().
            then((user)=>{
                console.log(user.name);
            })
            .catch((error)=>{
                console.log(error);
            })
            .finally(()=>{
                console.log('disconnect with the DB');
            });


console.log('=========');
// PROMISE chaining
let p1 = new Promise((resolve, reject)=>{
    resolve(5)
});
p1
    .then((n)=> n * 2) // 10
    .then((n) => n * 3) // 30
    .then(result => console.log(result)); // 30
