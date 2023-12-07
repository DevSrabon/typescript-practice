type CrushType = {
  name: string;
  age: number;
  address: string;
  gfName: string;
};

const crush1: CrushType = {
  name: "kjk",
  age: 23,
  address: "kjk",
  gfName: "kjk",
};

const crush2: CrushType = {
  name: "kjk",
  age: 23,
  address: "kjk",
  gfName: "kjk",
};


type OperationType = (x: number, y: number) => number;    
const calculate = (
  num1: number,//10
  num2: number,//20
  operation: OperationType
): number => {
  return operation(num1, num2); // (x, y) => x * y)
};

calculate(1, 2, (x, y) => x + y);
calculate(10, 20, (x, y) => x * y);


// const calculate = function(num1, num2, operation) {
//   return operation(num1, num2);
// };

// const additionResult = calculate(1, 2, function(x, y) { return x + y; });
// console.log(additionResult); // Output: 3

// const multiplicationResult = calculate(10, 20, function(x, y) { return x * y; });
// console.log(multiplicationResult); // Output: 200

function fetchData(callback: { (data: string): void; (arg0: string): void; }) {
  console.log("Fetching data...");
  setTimeout(function() {
    const data = 'This is some data.';
    callback(data);
  }, 5000);
 
}

function processData(data: string) {
  console.log('Processing data:', data);
  console.log("Data fetched.");
}

fetchData(processData);
function greet(name: string, callback: { (): void; (): void; }) {
  console.log('Hello, ' + name + '!');
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

greet('John', sayGoodbye);
