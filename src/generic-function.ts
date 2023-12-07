// // const createArr = <T>(value: T, count: number): T[] => {
// //   const arr = []
// //   for (let i = 0; i < count; i++) {
// //     arr.push(value)
// //   }
// //   return arr
// // }

// // const createArr = <T>(param:T):T[]=>{
// //   return [param]
// // }
// // // const arr =createArr("abc")  
// // const array =createArr<string>("abc")  
// // const array2 =createArr<boolean>(true)  
// // console.log(array2);



// // const createArr3 = <X,Y>(param:X, param2:Y):[X,Y]=>{
// //   return [param , param2]
// // }
// // // const arr =createArr("abc")  
// // const array =createArr3<string,string>("abc","xyz")  
// // const array2 =createArr3<boolean,string>(true,'sxs')  
// // console.log(array2);


// // const createArr2 = <T>(param:T):T=>{
// //   return param
// // }
// // // const arr =createArr("abc")  
// // const array11 =createArr2<string>("abc")  
// // const array22 =createArr2<boolean>(123)  
// // console.log(array11);



// // spread operator
// const crush = 'kate winslet';

// const myInfo = {
//   name: 'abc',
//   age: 23,
//   salary: 20000 
// }

// // const newData = {...myInfo, crush};

// const addMeInMyCrushMind =<T>(param:T)=>{
//   return {...param, crush}
// }

// const newData = addMeInMyCrushMind(myInfo);
// newData.crush