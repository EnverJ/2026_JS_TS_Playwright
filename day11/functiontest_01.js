// duplicate functions can be written but the latest function will eb called...
// function overloading is nto possible in JS
function search () 
{
    console.log("hello search");
}

function search (productName) 
{
    console.log("hello search2", productName);
}

// search(); // hello search2 undefined

// search("mac");  // hello search2 mac

function search (productName, price) 
{
    console.log("hello search2", productName, price);
}
// search();  // hello search2 undefined undefined
search();