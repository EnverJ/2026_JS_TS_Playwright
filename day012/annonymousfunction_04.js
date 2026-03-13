// anonymous function: a function has no name

let world = function () 
{
    console.log('Hello world');
    return 100;
}
// console.log(world); // [Function: world]
world(); // Hello world
console.log(world()); // Hello World, 100

let t1 = world();
console.log(t1); // hello world, 100


console.log('----------------');
/**
 * 
 * @param {*} browserName 
 */

let initDriver = function (browserName)
{
    console.log(`trying to launch ${browserName}`);
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('Launch chrome');
            return true;
        case 'edge':
            console.log('Launch edge');
            return true;
        case 'firefox':
            console.log('Launch chrome');
            return true;
        
    
        default:
            console.log('Please enter the right browser', browserName);
            return false;
    }

};

let isInit = initDriver('chrome');
if (isInit)
{
    console.log('enter the url: google.com');
}
