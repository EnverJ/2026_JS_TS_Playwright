
let user = {
    name : 'Tom',
    age:30,
    city : 'LA', 
    isActive : true,
    address : {
        flat : 10101,
        zipCode: 90909, 
        lat : 10.34,
        long : 11.22
    },
    devices: ['iphone', 'mouse', 'keyboard']
};

// for in loop:
for (let e in user)
{
    console.log(e, ': ', user[e]);
}
// name :  Tom
// age :  30
// city :  LA
// isActive :  true
// address :  { flat: 10101, zipCode: 90909, lat: 10.34, long: 11.22 }
// devices :  [ 'iphone', 'mouse', 'keyboard' ]

console.log(user.devices);
// [ 'iphone', 'mouse', 'keyboard' ]
console.log(user.devices.length); // 3


let user2 = {
    name : 'Tom',
    age:30,
    city : 'LA', 
    isActive : true,
    address : {
        flat : 10101,
        zipCode: 90909, 
        lat : 10.34,
        long : 11.22
    },
    devices: ['iphone', 'mouse', 'keyboard']
};

for (let e in user2)
{
    console.log(e,":", user2[e]);
    if (e === 'address')
    {
        console.log(user2[e].flat);
        break;
    }

}