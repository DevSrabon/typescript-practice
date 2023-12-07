const arraysOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arraysOfStrings: string[] = arraysOfNumbers.map((number) =>
  number.toString()
);

console.log(arraysOfStrings);

type Area = {
  width: number;
  height: number;
  depth?: string;
};

const obj1 = {
  name: "abc",
};
obj1["name"]; // obj1.name =abc

type C = Area["width"]; //lookup type
type B = keyof Area; // 'width' | 'height'

// generic korar jonno <T> dite hobe orthat dynamic korar jonno
type AreaResult<T> = {
  // readonly [key in B]: number; // readonly width: number;readonly height: number;
  // [key in keyof Area]: boolean; //  {width: boolean; height: boolean;}
  [key in keyof T]: T[key]; //width: number;height: number;depth?: string;
};

const area1: AreaResult<{ name: string; mobile: number }> = {
  name: "able",
  mobile: 123,
};

const rectangularArea: Area = {
  width: 10,
  height: 20,
};

rectangularArea.width = 8;
