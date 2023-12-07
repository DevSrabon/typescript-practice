// class Animal {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   makeSound(sound: string) {
//     console.log(`${this.name} says ${sound}`);
//   }
// }

// sortcut
class Animal {
  constructor(public name: string, public age: number) {}
  makeSound(sound: string) {
    console.log(`${this.name} says ${sound}`);
  }
}

const dog = new Animal("dog", 3);
dog.makeSound("woof");
