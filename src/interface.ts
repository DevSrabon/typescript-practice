// type rollNumbersType = number[];
// interface IRollNumbers {
//   [index: number]: string;
// }
// const rollNumbers: IRollNumbers = ["1", "4", "5"]; //[index]

// interface IAddNumbers {
//   (num1: number, num2: number): number;
// }
// type addNumbersType = (num1: number, num2: number) => number;
// const addNumbers: addNumbersType = (num1, num2) => num1 + num2;

// interface IUser  {
//   name: string,
//   age: number,
// }

// interface IExtendedUser extends IUser {
//   role: string
// }

// const rollNumbers: number[] = [1, 2, 3, 4, 5];
interface IRollNumbers {
  [index: number]: number | string;
}

const rollNumbers2: IRollNumbers = ["hello", "world"];
const rollNumbers: number[] = [1, 2, 3, 4, 5];

// const user: extendedUser = {
//   name: "Omanush",
//   age: 2000,
//   role: "Unknown",
// };
// const userWithTypeAlias: User = {
//   name: "Type Alias",
//   age: 100,
// };

// const userWithInterface: IUser = {
//   name: "Interface",
//   age: 200,
// };
// userWithInterface.
