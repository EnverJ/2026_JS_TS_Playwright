

// inheritance

class Car{
    start(){
        console.log("car start");
    }
    stop(){
        console.log("car stop");
    }
    refuel(){
        console.log("car --- refuel");
    }
}
class BMW extends Car{
    override start(){
        console.log("bmw --- start");
    }

    autoParking(){
        console.log("BMW --- Auto parking");
    }
}

let bmw:BMW = new BMW();
bmw.start();
bmw.stop();
bmw.refuel();
bmw.autoParking();

// bmw --- start
// car stop
// car --- refuel
// BMW --- Auto parking

let car:Car = new Car();
car.start(); // car start


console.log("=========");
// child calls object can be referred by paren class ref variable
//Top/Up casting: IS-A relationship
// every bmw is a car. 
let c1 : Car = new BMW();
c1.refuel();
c1.start();
c1.stop();
// c1.autoParking(); // not allowed

// car --- refuel
// bmw --- start
// car stop

// down casting: parent class object can be referred by child class variable
// not every car is BMW
// let b1:BMW = new Car();

