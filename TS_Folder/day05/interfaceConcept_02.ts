// interface: define the prototype for the object and classes
// cannot create the object of interface
// no method declaration: no method body; no business logic


// interface with the objects: define the shape / blueprint of the object

interface coUser{
    name: string;
    age: number;
    salary ?: number;
    readonly compName: string;

    coding():void;
    calcSal():number;
}

let u2: coUser = {
    name : "John",
    age : 29,
    salary : 100,
    compName : "Cola",
    coding():void{
        console.log(this.name, " is coding");
    },
    calcSal():number {
        return 100;
    },

}
console.log(u2);
u2.coding();
console.log(u2.calcSal()); 