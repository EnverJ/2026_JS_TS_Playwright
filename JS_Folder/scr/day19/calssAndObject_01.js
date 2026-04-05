class Employee{
    // class variable/global variables
    name;
    age;
    salary;
    isPerm;

    // constructor : only one constructor ... is allowed 
    constructor(name, age, salary, isPerm){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isPerm = isPerm;

    };
  

    // methods: a function inside a class
    study(){
        console.log(`${this.name} is studying here...`);
    }
   getInfo(){
    console.log(`${this.name}, ${this.age}, ${this.salary}, ${this.isPerm}`);
   }

};


// object of the Employee class: using new keyword

let e1 = new Employee('Tom',24,100,true);
console.log(e1.name, e1.age); // Tom 24
e1.study(); // Tom is studying here...
e1.getInfo();// Tom, 24, 100, true

let e2 = new Employee('Peter', 35, 98, false)
e2.getInfo(); // Peter, 35, 98, false


