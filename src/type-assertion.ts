// typescript theke ami beshi buji

let emni:any;
emni = 'next level web dev';

(emni as string).length;
<string>emni.length;

     

function kgToGram(param:string|number):string|number|undefined{
  if(typeof param === 'string'){
    const value = parseFloat(param)*1000;
    return `${value} g`;
  }
  if(typeof param === 'number'){
    const value = param*1000;
    return value;
  }
}
// const result2: string | number | undefine
const result2 = kgToGram(1000) 

// const result: string
const result = kgToGram(1000) as string;  

type CustomError ={ 
  message: string }

try {
  
} catch (error) {
  console.log((error as CustomError).message);
  
}