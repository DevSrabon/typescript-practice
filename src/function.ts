// function add (num1:number,num2:number):number{

//   return num1+num2
// }
// add(1,2)

// array map
const arr = [1, 2, 3, 4, 5, 6];
const newArr = arr.map((item: number) => item * item);
// console.log("🚀 ~ file: function.ts:12 ~ newArr:", newArr)

// rest parameter

const friends = (...names: string[]) => {
  console.log(names);
};
friends("abc", "def", "ghi");

// array and object destructuring
const myFriends = ["abc", "def"];
const [myFriend1, myFriend2] = myFriends;
const obj = {
  fullName: "abc",
  balance: 23,
};
const { fullName, balance } = obj;

// array method
const person: {
  name: string;
  balance: number;
  addBal(money: number): number;
} = {
  name: "abc",
  balance: 23,
  addBal(money: number) {
    return this.balance + money;
  },
};
person.addBal(200);

// spread operator
const arr1 = ["john", "doe"];
const arr2 = ["abc", "def"];
arr1.push(...arr2);

// type alias
// type AddType=(num1:number,num2:number)=>number

// const add3:AddType=(num1,num2)=>{

//   return num1+num2
// }
