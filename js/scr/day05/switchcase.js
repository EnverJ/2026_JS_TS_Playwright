// 
let browser = "nano";
switch (browser.trim().toLowerCase()){

    case "chrome":
        console.log("launch chrome");
        break;
    case "edge", "nano":
        console.log("launch edge");
        break;
    case "safari":
        console.log("launch safari");
        break;
    default:
        console.log("invalid browser");
        break;
    case "opera":
        console.log("launch opera");
        break;

}

console.log("byee");

console.log("=========");

let marks = 90;
switch (marks){

}


console.log('=============');
// use cases:
// 1. cross browser logic:
// 2. month --- jan to dec
// 3. RBACK: user permissions/roles: admin, seller, partner, vendor,
// 4. multiple environments: QA, DEV, STAGE, PROD
// 5. in API: PUT, GET, POST, DELETE


// NESTED SWITCH CASES:
let env = "qa"
let username='admin'
switch (env){
    case 'qa':
        console.log("run tcs on qa env");
            switch (username){
                case 'admin':{
                    console.log("log in with admin");
                    break;
                }
                default:
                break
            }
        break;
    default:
        break;

}