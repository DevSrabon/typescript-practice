class Person {
  takeNap(): void {
    console.log("I am sleeping 8 hours");
  }
}

class Students extends Person {
  takeNap(): void {
    console.log("I am sleeping 10 hours");
  }
}

class Developer extends Person {
  takeNap(): void {
    console.log("I am sleeping 5 hours");
  }
}

function getNap(param: Person) {
  param.takeNap();
}

const person1 = new Person();
const person2 = new Students();
const person3 = new Developer();

getNap(person1);
getNap(person2);
getNap(person3);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangular extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
}

function getAreaOfShape(param: Shape) {
  console.log(param.getArea());
}

getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangular(10, 20));
