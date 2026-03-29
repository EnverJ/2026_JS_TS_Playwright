/**
 * 
 * @param {*} username 
 * @param {*} password 
 * @param {*} role 
 * @param {*} status 
 */
function login (username, password, role = 'admin', status = 'active')
{
    console.log(username, password, role, status);
}
login('zxc@gmail@gmail.com', 'zxc@123'); // zxc@gmail@gmail.com zxc@123 admin active
login('zxc@gmail@gmail.com', 'zxc@123','seller'); // zxc@gmail@gmail.com zxc@123 seller active
login('zxc12@gmail.com', 'kiran', 'inactive') // zxc12@gmail.com kiran inactive active
login('zxc12@gmail.com', 'kiran', null,'inactive'); // zxc12@gmail.com kiran null inactive
login('zxc12@gmail.com', 'kiran', "",'inactive'); // zxc12@gmail.com kiran  inactive

