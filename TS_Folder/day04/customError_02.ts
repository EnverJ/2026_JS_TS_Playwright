// custom error classes
class ElementError extends Error{

    constructor(message:string){
        super();
    }

}

class BrowserError extends Error{

    constructor(message:string){
        super();
    }

}

class FrameworkError extends Error{

    constructor(message:string){
        super();
    }

}

let browser = "chr";
switch(browser){
    case 'chrome':
        console.log("open chrome");
        break;
    case "edge":
        console.log("open edge");
        break;
    default:
        console.log("please enter the correct browser name ...");
       // throw new Error("====invalid browser======" + browser"); 
       // or
        throw new BrowserError("====invalid browser======" + browser);
}
console.log("enter the app url");