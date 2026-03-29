let obj = 
{
    name : "Tom",
    age : 20

}
obj = null;
// obj = undefined;
// console.log(obj.name); // TypeError: Cannot read properties of null (reading 'name')

// undefine or null handling in js
console.log(obj?.name); // undefined
console.log('Hello world'); // Hello world