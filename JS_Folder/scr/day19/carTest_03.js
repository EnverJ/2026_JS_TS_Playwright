

import { Car, BMW, Audi } from "./cardesign_02.js";


let bmw = new BMW();
bmw.start();// inherited
bmw.stop(); // inherited
bmw.refuel(); // override
bmw.autoParking(); // individual
console.log(bmw.min_speed); // 200 overridden. 

console.log('--------');
let car = new Car();
car.start();
car.stop();
car.refuel();
// car.autoParking(); // not allowed


let audi = new Audi();
audi.start();
audi.stop();
audi.refuel();
audi.theftSafety();
console.log(audi.min_speed); // 75
