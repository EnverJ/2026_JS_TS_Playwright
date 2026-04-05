
// let p1 = Promise.resolve('task 1 done');
// let p2 = Promise.reject('500 error')
// p1.then((result) => {
//     console.log(result);
// }); // task 1 done

// p2.catch((error) => {console.log(error)}); //500 error

// 1. promise.all(: run multiple promise in parallel mode and waits until all of them succeed)

let p1= Promise.resolve('task 1 done');
let p2 = Promise.resolve('task 2 done');
let p3 = Promise.resolve('task 3 completed');
Promise.all([p1,p2,p3]).
                        then((result) => {
                            console.log(result);
                        }); // [ 'task 1 done', 'task 2 done', 'task 3 completed' ]

// with wait:
let p11 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('display the logo on the page');
    },3000)
});

let p12 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('load the login form');
    },2000)
});

let p13 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('load footer of the page');
    },1000)
});
Promise.all([p11, p12, p13]).then((result)=>{console.log(result);})
// [
//   'display the logo on the page',
//   'load the login form',
//   'load footer of the page'
// ]

// one of them is rejecting/failed
let c11 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        reject('load the login form');
    },1000)
});

let c12 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        reject('load footer of the page');
    },5000)
});
let c13 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        reject('load footer of the page');
    },3000)
});
Promise.all([c11,c12,c13])
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=> console.log(error));
// load the login form

// 2. race(): returns the first promise that finishes

let t11 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        reject('login form error with loading');
    },2000)
});

let t12 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('load footer of the page');
    },2000)
});
let t13 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('load footer of the page');
    },500)
});

Promise.race([t11, t12, t13])
                            .then((result) => console.log(result))
                            .catch((error) => console.log(error));

//3. allSettled
// wait for all the promises to finish, wethee they success or fail


let a11 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('login form loading');
    },2000)
});

let a12 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('load footer of the page');
    },2000)
});
let a13 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('load footer of the page');
    },500)
});
Promise.allSettled([a11,a12,a13])
                                .then((result) => console.log(result))
                                .catch((error)=>console.log(error));

// 4. any(): returns the first resolved promises

let x11 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        reject('login form error with loading');
    },1000)
});

let x12 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        reject('load footer of the page error');
    },3000)
});
let x13 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('load footer of the page');
    },500)
});
Promise.any([x11,x12,x13]). 
                            then((result)=>console.log(result))
                            .catch((error) =>console.log(error));


