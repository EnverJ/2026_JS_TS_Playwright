
function launchBrowser(browserName:string):boolean{
    switch(browserName.toLowerCase().trim()){
        case 'chrome':
            console.log("chrome is launched");
            return true;
         case 'chrome':
            console.log("chrome is launched");
            return true;
        default:
            console.log("invalid browser");
            return true;
    }

};
let isLaunched = launchBrowser("chrome")
console.log(isLaunched);

// promises in ts
function getNumber() :Promise<number>{
    return Promise.resolve(100);
}
getNumber().then((res)=>console.log(res)); // 100

function getTrainerName():Promise<string>{
    return Promise.resolve("naveen")
}
getTrainerName().then((res)=>console.log(res));// naveen

//
type userType = {name:string, age:number}

function getUserData():Promise<userType>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let user = {
                name:"Josh",
                age:30
            };
            resolve(user);
        },3000)
    })

}

// getUserData().then((myuser)=>console.log(myuser)); // { name: 'Josh', age: 30 }

async function getMyUserData(){
    let myUser = await getUserData();
    console.log(myUser);
}
getMyUserData(); // { name: 'Josh', age: 30 }

// pw:

function click(element: string):Promise<void>{
    console.log("click on ", element);
    return Promise.resolve();
}

// generic util/function
async function doClick(element:string){
    await click(element);

}
// in the test code
doClick("#login");