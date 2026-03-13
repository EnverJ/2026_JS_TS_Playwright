// function expression
let cart = function addToCart (productName)
{
    console.log('add to cart', productName);
    return true;

}

// function expression name is the cart
// actual function name: addToCart

// call the function
cart(); // add to cart

// addToCart(); // ReferenceError: addToCart is not defined
let n1 = cart('macbook pro');
console.log(n1); 
// add to cart macbook pro
// true

let waitForFunction = function waitForElementPresentWithExplicitWaitOnThePage(productName)
{
    console.log('product name: ', productName);
    return true;

}
console.log(waitForFunction); // Function: waitForElementPresentWithExplicitWaitOnThePage
let flag = waitForFunction('imac');
console.log(flag);
// product name:  imac
// true
flag = waitForFunction('macbook');
console.log(flag);

// product name:  macbook
// true