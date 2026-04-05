class Car{
    static wheels= 4;
    min_speed = 75;


    // private var/methods:
    #password = 1234;

    getPassword(){
        return this.#password;

    }

    // private method
    #getEngine(){
        console.log('car engine data');

    }

    getEngineData(){
        return this.#getEngine();
    }


    start(){
        console.log('car --start here');
        console.log(this.#password);
    }
    stop(){
        console.log('car -- stop');
    }
    refuel(){
        console.log('car -- refuel');

    }

};

class BMW extends Car{
    min_speed = 200;

    start(){
        console.log('BMW -- start');
       // console.log(this.#password); // not allowed
    }

    autoParking(){
        console.log('bmw - auto parking');
    }

};

class Audi extends Car{
    theftSafety(){
        console.log('audi - theftSafety');

    };
};



// let bmw = new BMW();
// bmw.start();// inherited
// bmw.stop(); // inherited
// bmw.refuel(); // override
// bmw.autoParking(); // individual

// console.log('--------');
// let car = new Car();
// car.start();
// car.stop();
// car.refuel();
// // car.autoParking(); // not allowed

// let audi = new Audi();
// audi.start();
// audi.stop();
// audi.refuel();
// audi.theftSafety();
// audi.autoParking(); // not allowed

export {Car, BMW, Audi};

console.log(Car.wheels); // 4

let car = new Car();
//console.log(car.#password);
console.log(car.getPassword());
// car.getEngine();
car.getEngineData(); // car engine data

// OOPS:
//1. INHERITANCE: yes
// 2. method overloading: yes
// 3. objects/class : yes
//4. encapsulation: yes
//5. public-private: yes
//6. abstract/interface: NO
//7. method overloading: NO
//8. method/const ... overloading: NO
