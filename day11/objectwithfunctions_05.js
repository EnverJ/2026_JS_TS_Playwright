
let user = 
{
    // properties
    name: 'John',
    age: 30,
    department: 'QA', 
    salary: 100.55,
    city: 'LA',
      company : 'IBM',

    // functions: behaviors
    coding ()
    {
        console.log('user is coding...');

    }, 
    travel ()
    {
        console.log('user is traveling...');
    },   
}

console.log(user);
console.log(user.name); // John
user.coding();  // user is coding...
user.travel(); // user is traveling...

console.log("---------------");

let loginPage = 
{
    username: "san@gmail.com",
    password: "san@",
    role: "admin",
    login() 
    {
        console.log("login to app: "+ this.username);
        this.resetPassword();
    },
    resetPassword ()
    {
        console.log("reset password");
    },
    logout()
    {
        console.log("logout from the app");
    }
}

loginPage.login();
