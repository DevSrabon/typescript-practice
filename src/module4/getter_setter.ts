// class BankAccount {
//   id: number;
//   name: string;
//   private balance: number;
//   constructor(id: number, name: string, balance: number) {
//     this.id = id;
//     this.name = name;
//     this.balance = balance;
//   }

//   // getter
//   get _balance() {
//     return this.balance;
//   }

//   // setter
//   set deposit(value: number) {
//     this.balance = value;
//   }
//   getBalance() {
//     return this.balance;
//   }
// }

// const myAccount = new BankAccount(1, "John", 1000);
// myAccount.deposit = 2000;
// console.log(
//   "🚀 ~ file: access_modifier.ts:13 ~ myAccount:",
//   myAccount.getBalance()
// );
// console.log(
//   "🚀 ~ file: access_modifier.ts:13 ~ myAccount:",
//   myAccount._balance
// );

// class StudentAccount extends BankAccount {
//   constructor(id: number, name: string, balance: number) {
//     super(id, name, balance);
//   }

//   test() {
//     this.name;
//   }
// }
