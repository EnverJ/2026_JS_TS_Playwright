let num = [10,20, 30, 40 ]// 0-3, l=4
// to print all the value of array: use for loop
for (let i = 0; i <= num.length-1; i++)
    {
        console.log(num[i]);
}
// 10, 20, 30, 40
console.log('-------------');
// for..of loop
for (let e of num)
{
    console.log(e);
}
// 10, 20, 30, 40


console.log('-----------');
// for..in loop used for printing index
for (let k in num)
    {
      //  console.log(k); // 0,1,2,3
        console.log(k, num[k]);

}
// 0 10
// 1 20
// 2 30
// 3 40

console.log('---------');
let empData = ['josh', 30, 'SDET1', 'IBM', 12.33, true]
for (let e of empData)
{
    console.log(e);
    if (e === 'SDET1')
        {
            console.log('105 hike');
            break;
        }
}
// josh
// 30
// SDET1
// IBM
// 12.33
// true
console.log('-------');
for(let e = empData.length-1; e >= 0; e--)
{
    console.log(empData[e]);

}

// true
// 12.33
// IBM
// SDET1
// 30
// josh

console.log('--------------');


