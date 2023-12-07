class Student {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep(hours: number): string {
    return `this ${this.name} will sleep for ${hours} hours`;
  }
}

class Teacher extends Student {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
  takeClass(numberOfClass: number): string {
    return `this ${this.name} will take ${numberOfClass} classes`;
  }
}

class Graduate extends Student {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
  takeClass(numberOfClass: number): string {
    return `this ${this.name} will take ${numberOfClass} classes`;
  }
}

const myTeacher = new Teacher("abc", 23, "xyz", "maths");
console.log(myTeacher.takeClass(5));
