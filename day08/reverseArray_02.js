let num = [1,2,3,4,5]; // 0- 4 , len = 5
//let count = num.length-1; // 4

for (let e of num)
{
    let count = num.length - num.indexOf(e)-1;
    console.log(num[count]);

}

console.log('---------');
for (let e in num)
{

    console.log(num[num.length-num[e]]);
}