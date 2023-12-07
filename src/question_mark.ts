const age : number = 23;
// if(age>=18){
//   console.log("Adult");
// }else{
//   console.log("Minor");
// }

const isAdult = age>=18 ? "Adult" : "Minor";  
console.log({isAdult});

const isAuthenticated =null;
const userName = isAuthenticated ?? "Guest"; //nullish coalescing operator null/undefined

type Manush ={
  name:string;
  age:number;
  profession:string;
  address:{
    city:string;
    country:string;
    home?:""
  }
}


const manush1:Manush ={
  name:"Manush",
  age:23,
  profession:"Developer",
  address:{
    city:"Dhaka",
    country:"Bangladesh"
  }
}

const home = manush1.address.home ?? "No Home";
console.log({home});