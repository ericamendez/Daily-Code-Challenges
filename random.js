class Person {
    constructor(name = "Anonymous", age, height) {
      this.name = name;
      this.age = age
      this.height = height 
    }
    introduce() {
      console.log(`Hello, my name is ${this.name}`);
    }
    birthday() {
        console.log(`You are now ${this.age}`)
    }
}

// function Person (name, age, height){
//     const name = name
//     const age = age
//     const height = height

// }


let Erica = new Person("Erica", 31, "5'10")
console.dir(Erica)

  
// const person = new Person();
// person.introduce(); // Hello, my name is Anonymous