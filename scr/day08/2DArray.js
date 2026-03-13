let num = [

    [1,2,3],
    [20,10,30],
    [100, 200, 300],
    [11,22,33]
];
// 4X3 matrix; balance 2 D arrays: [row] [columns]

console.log(num[0][0]); // 1
console.log(num[2][2]); // 300


// index - normal loop
for (let i = 0; i < num.length; i++) 
    {
        for (let j = 0 ; j < num[i].length; j++) 
            {
               console.log(num[i][j]);

            }
          

    }

for (let i = 0; i < num.length; i++) 
    {
        for (let j = 0 ; j < num[i].length; j++) 
            {
                process.stdout.write(`${num[i][j]} `)

            }
            process.stdout.write('\n')

           // console.log();

    }

    console.log(num);


console.log('-------jagged array-------');
let marks = [
    [1,2,3],
    [10],
    [23,44,55,67],
    [90, 80]
]
console.log(marks);

for (let i = 0 ; i < marks.length; i++)
{
    for (let j = 0 ; j < marks[i].length; j++)
    {
     //   console.log(marks[i][j]);
       process.stdout.write(`${marks[i][j]} `)

    }
    console.log();

}

