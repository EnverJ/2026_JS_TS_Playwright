// error or exception: Error

//1
// 2 -- error ---terminated -- browser = "enver"
// handling the error -- try - catch block/finally
// non handling -- throw new error
// reading something from the file, 9/0, parsing json to js, work, api data

// 3 -- enter the url
// 4 - click on btn


function div(a:number, b:number):number{
    if(b === 0 ) {
        throw new Error( " cannot be divided zero");
    }
    return a / b;
};

let r1 = div(10, 2);
console.log(r1);

// json to js object
// multiple catch block is not allowed. 
function parsing(){
    try{
            let result = JSON.parse('{"name":"Tom"}');
            console.log("hello");
            console.log("hello");
            console.log(result);
    }
    catch(error){
        console.log(error);
          
    }
    finally{
        console.log("logout");
    }


}
parsing();
console.log("DONE");

function m1():never{
    throw new Error("some error")
}
m1(); //  some error
