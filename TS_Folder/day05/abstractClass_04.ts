
// Abstraction class:
// Can not create the object of the abstract class
// can have abstract methods: no method body
// can have non abstract methods: have method body
// abs + non abs methods ---> 0 to 100% abstraction: Partial abstraction

abstract class Page{
    constructor(){
        console.log("default page const...");
    }
    abstract title():void;
    abstract url():void;

    pageLoading(): void{
        console.log("page is loaded in 20 seconds");

    }

    footer():void{
        console.log("display footer links");
    }
}

// is good to write override
class LoginPage extends Page{
        constructor(){
            super();
        console.log("default page const...");
    }
    override title(): void {
        console.log("google.com");
    }
    url(): void {
        console.log("https://google.com/login.html");
    }
    override pageLoading(): void {
        console.log("login page loaded in 5 seconds");
    }
    doLogin(username: string, password:string):void{
        console.log(username, password, " login to the app");
    }
    
}

let lp: LoginPage = new LoginPage();
lp.title();
lp.url();
lp.pageLoading();
lp.doLogin("dsfsd", "09809dsd");