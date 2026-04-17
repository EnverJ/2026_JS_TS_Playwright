// public, private, protected


class User{
    public  testing():void{
        console.log("this is testing");

    }
    private coding():void{
        console.log("testing coding");
    }

    public doCoding():void{
        this.coding();
    }
    
    protected management():void{
        console.log("management");
    }
}

// outside of the class
let u1:User = new User();
u1.testing(); // this is testing

// child
class Employee extends User{
    public working():void{
        this.testing();
        this.management();
        this.doCoding();
    }
}


let emp:Employee = new Employee();
emp.testing();
emp.working();