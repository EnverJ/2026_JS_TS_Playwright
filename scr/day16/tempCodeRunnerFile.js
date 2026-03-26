let p1 = new Promise((resolve, reject)=>{
    resolve(5)
});
p1
    .then((n)=> n * 2)
    .then((n) => n * 3)
    .then(result => console.log(result));