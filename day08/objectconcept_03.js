// object -- non primitive data type 
// reference type




// key --value pair format

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
    }
};
console.log(user); // { name: 'Tom', age: 30, city: 'LA', isActive: true }
console.log(user.name); // Tom
console.log(user.tel); // undefine
console.log(user['name']); // Tom
console.log(user.address); // { flat: 10101, zipCode: 90909, lat: 10.34, long: 11.22 }
console.log(user.address.flat); // 10101
console.log(user.address['zipCode']); // 90909

// create a new key-value pair
user.email = "tom@gmail.com"
console.log(user);
console.log(user.email); // tom@gmail.com

// delete a pair
delete user.age;
console.log(user);
console.log(user.age); // undefine

// update a pair
user.name = 'Lisa';
console.log(user.name); // Lisa







