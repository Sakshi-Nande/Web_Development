// factory functions 

function PersonMaker(name,age){
    const person={
        name:name,
        age:age,
        talk(){
            console.log(`Name : ${name}`);
        }
    }
    return person;
}

let p1=PersonMaker("Sakshi",21);
p1.talk();

//new operator

function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.say=function(){
    console.log(`Hello ${this.name}`);
}

let p2=new Person("Sanjay",55);
p2.say();


//Class

class Student {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log("Helloo");
    }
}

let p3=new Student("Dhanashri",45);
p3.greet();

//Inheritance

class Person1 {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log("Helloo");
    }
}

class Student1 extends Person1 {
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;
    }
    hello(){
        console.log("Helloo jii");
    }
}

let p4=new Student1("Dhanashri",45,99);
p4.greet();
p4.hello();

