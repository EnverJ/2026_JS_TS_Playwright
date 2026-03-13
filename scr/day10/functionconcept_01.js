// 1. simple function: no input and no return


// test(); // function can be hoisted
function test() // 0 input
{
    console.log('test function'); // test function
    // no return

}

// call function
test();

function printInfo()
{
    console.log('hello automation');
}
printInfo(); // hello automation

console.log('-------------------');
//2. no input but some return:
function getTrainerName()
{
    console.log('get trainer name');
    let trainerName = 'Naveen';
    return trainerName;

}
let name = getTrainerName();
console.log(name);
// get trainer name
// Naveen

console.log(getTrainerName());
// get trainer name
// Naveen

//. some input and some return
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function add(a, b)
{
    console.log('adding two numbers');
    let c = a+ b;
    return c;

}
// cal by values
let result = add (3,4);  // a values/arguments
console.log(result);
// adding two numbers
// 7

console.log('---------------');
// AC: create a function. which will calculate the student marks. range: 1 to 100. 
// input parameters: studentName()
// return the marks of the particular student (number)
// if the student name not found, return -1
/**
 * 
 * @param {string} studentName 
 * returns
 */
function getStudentMarks(studentName)
{
    let marks = -1;
    console.log('getting marks for student: '+ studentName);
    if (studentName === 'Enver')
    {
      //  return 90;
      marks = 90;
    }
    else if (studentName === 'Kudret')
    {
      //  return 100;
      marks = 100;
    }
    else if (studentName === 'Ezmet')
    {
      //  return 100;
      marks = 100;

    }
    else
    {
        console.log(`${studentName} is not found}`);
     //   return -1;
    }
    return marks;

}
let n1 = getStudentMarks('Kudret');
console.log(n1);

console.log('--------------');
/**
 * 
 * @param {string} studentName 
 */
function getMarks(studentName)
{
    console.log('getting marks for student: '+studentName);
    switch (studentName.trim().toLowerCase()) {
        case 'ravi':
            return 90;
         case 'pooja':
            return 800;
         case 'oday':
            return 100;
        default:
            console.log(`${studentName} is not found`);
            return -1;
    }
  
}
 let marks =  getMarks('ravi');
   console.log(marks);


console.log('============');
/**
 * 
 * @param {number} productPrice 
 * @param {number} tax 
 * @param {number} lateFee 
 * @returns this will return the total billing amount
 */

function getTotalBilling(productPrice, tax, lateFee)
{
    console.log('calculating the final billing ....');
    return productPrice + tax + lateFee

}
let amount = getTotalBilling(1000, 10, 20);
console.log(amount);

console.log('--------------');

console.log(typeof getTotalBilling);  // function

console.log(getTotalBilling.name); // getTotalBilling

console.log(getTotalBilling.length); // 3 --- arguments

