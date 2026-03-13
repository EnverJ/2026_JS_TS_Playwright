function login()
{
    console.log("login to the app");
    search();
}
function search () 
{
    console.log("perform the search");
    addToCart();
//    login();  // isStackOverflowError(e). RangeError: Maximum call stack size exceeded
}
function addToCart()
{
    console.log("add to cart");
}
login();

// console.log('-----------');
// function billing()
// {
//     console.log('billing function');
//     let x = 10;
//     let y = x+10;
//     console.log(y);
//     billing();  // recursive 
// }
// billing(); //RangeError: Maximum call stack size exceeded

// factorial number
// fact(3) = 3x2x1 = 6
// fact(0) : 1
// fact(1): 1
// fact(4): 4x3x2x1 = 24
function fact(x)
{
    if (x === 0 || x === 1)
    {
        return 1;
    }

    let f = 1;
    do
    {
        f = f * x;
        x--;
    }
    while (x > 1);

    return f;
}
console.log(fact(3));