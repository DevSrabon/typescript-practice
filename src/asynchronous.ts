const makePromise = ():Promise<string>=>{
  return new Promise<string>((resolve,reject)=>{
    const data:string = ""
    if(data){
      resolve(data)
    }else{
      reject("Unable to fetch data")
    }
  })
}

const fetchData1 = async():Promise<void>=>{
  try {
    
    const data = await makePromise()
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}
fetchData1()

interface Todo{
  userId:number
  id:number
  title:string
  completed:boolean
}

const getTodo =async():Promise<Todo[]>=>{
 const res= fetch('https://jsonplaceholder.typicode.com/todos')
 const data = (await res).json()
  return data
      
}

const fetchData2 = async():Promise<void>=>{
  try {
    
    const data = await getTodo()
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}

fetchData2()
