// keyof guard

function add(x: number | string, y: number | string): number | string {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else {
    return x.toString() + y.toString();
  }
}

add(1, 2); // 3
add("1", "2"); // "12"

type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: string;
};

const getUser = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    return user.role;
  }
  return user.name;
};

const normalUser: NormalUser = {
  name: "normal",
};

const adminUser: AdminUser = {
  name: "abc",
  role: "admin",
};
console.log(getUser(adminUser));

// instanceof guard

class Animal1 {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log(`The ${this.species} named ${this.name} makes a sound.`);
  }
}

class Dog extends Animal1 {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeBark() {
    console.log(`The ${this.species} named ${this.name} barks.`);
  }
}
class Cat extends Animal1 {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeow() {
    console.log(`The ${this.species} named ${this.name} meows.`);
  }
}

function isDog(animal: Animal1): animal is Dog {
  return animal instanceof Dog;
}

function isCat(animal: Animal1): animal is Cat {
  return animal instanceof Cat;
}

function getAnimal(animal: Animal1) {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeow();
  } else {
    animal.makeSound();
  }
}

const animal1 = new Dog("German Sheppard", "Dog");
const animal2 = new Cat("Persian", "cat");

getAnimal(animal2);
