let user = {
    name: 'Naveen',
    age : 30, 
    city : 'LA'
};


/**
 * 
 * @param {object} userObject 
 */
function printUserData (userObject){
        userObject.age = 40;
        userObject.zp = 9090;
    console.log(userObject);

};
printUserData(user); // { name: 'Naveen', age: 40, city: 'LA', zp: 9090 }