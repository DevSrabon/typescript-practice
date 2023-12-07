// const vehicles: IVehicle[] = [
//   {
//     name: "Car",
//     model: "Sedan",
//   },
// ];

// interface IVehicle {
//   name: string;
//   model: string;
// }

// interface IVehicle {
//   startEngine(): void;
//   stopEngine(): void;
//   move(): void;
// }

// class Vehicle implements IVehicle {
//   constructor(public name: string, public model: string) {}
//   startEngine(): void {
//     console.log("Starting engine");
//   }
//   stopEngine(): void {
//     console.log("Stopping engine");
//   }
//   move(): void {
//     console.log("Moving");
//   }
//   test(): void {
//     console.log("Testing");
//   }
// }

// const vehicle1 = new Vehicle("Car", "Sedan");

abstract class Vehicle {
  constructor(public name: string, public model: string) {}
  abstract startEngine(): void;
  abstract stopEngine(): void;
  move(): void {
    console.log("Moving");
  }
  test(): void {
    console.log("Testing");
  }
}
class Car extends Vehicle {
  startEngine(): void {
    console.log("Starting engine");
  }
  stopEngine(): void {
    console.log("Stopping engine");
  }
}

const car1 = new Car("Car", "Sedan");
