// spread operator
const crush = 'kate winslet';

type MyInfo={
  name: string;
  age: number;
  salary: number;
}

const myInfo: MyInfo = {
  name: 'abc',
  age: 23,
  salary: 20000 
}

// const newData = {...myInfo, crush};

const addMeInMyCrushMind =<T extends MyInfo>(param:T)=>{
  return {...param, crush}
}

const newData = addMeInMyCrushMind(myInfo);
newData.crush