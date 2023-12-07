const searchName = (vale: string | null) => {
  if (vale === null) {
    console.log("vale is null");
  } else {
    console.log("vale is not null");
  }
};
searchName(null);


const getMyCarSpeed =(speed:unknown)=>{
  if(typeof speed === "number"){
    console.log(speed);
  }
  if(typeof speed === "string"){
    console.log(speed);
  }
  if(typeof speed === "boolean"){
    console.log(speed);
  }
}

getMyCarSpeed(10);
getMyCarSpeed("10");
getMyCarSpeed(true);

function throwError(message: string): never {//never return
  throw new Error(message);
}

throwError("error"); 