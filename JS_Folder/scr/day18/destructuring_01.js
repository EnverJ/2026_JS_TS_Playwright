// Destructuring:
// clean way to extract the values from arrays or objects and assign them to variables in a single line. 
let [a, b, c] = [10, 20, 30]
console.log(a, b, c); // 10 20 30

let arr = [40, 50, 60]
let [x, y ,z] = arr;
console.log(x, y ,z); // 40 50 60

let [p, , r] = arr;
console.log(p,r); // 40 60

let ar = [10, 40];
let [a1, b1 = 50] = ar;
console.log(a1); // 10
console.log(b1); //40

let num = [1,2,3, 4];
let [t1,t2, ...pop] = num;
console.log(t1); // 1
console.log(t2); //2
console.log(pop); // [ 2, 3, 4 ]

// Object Destructuring:
let user = {
    name: 'Tom',
    age : 30
}

// let {username, userage} = user
// console.log(username, userage);// undefined undefined

let {name, age} = user;
console.log(name, age); // Tom 30

console.log('=================================');
let customer = {
    name: 'Peter',
    age: 40,
    city: 'LA',
    zipcode: 421414
};

function placeOrder({name, city}){
    console.log(name, city);

};
placeOrder(customer); // Peter LA


console.log('==========');
function launchBrowser({browserName, headless, url}){
    console.log(browserName, headless, url);
};

let page = {
    title: "Login",
    browserName: "chrome",
    url: "https://nal.com",
    headless: true, 
    footer: [1,2,3]
};

launchBrowser(page); // chrome true https://nal.com