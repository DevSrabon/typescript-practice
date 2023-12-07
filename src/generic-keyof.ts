type PersonType ={
  name:string,
  age:number,
  address:string
}

// type newType = "name"     | "age" | "address" //manual

type newType = keyof PersonType //automatic 

const ann:newType = "name";
const b : newType ="address"




// Y= 'name'| 'age' | 'address'  
function getProperty<X,Y extends keyof X>(obj:X, key:Y){
obj[key]
}

const property=getProperty({name:"abc",age:23,address:"xyz"},"age")    