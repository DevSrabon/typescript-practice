type NoobDev={
  name:string
}

// type JuniorDev={
//   name:string
//   expertise:string
//   experience:number
// }
type JuniorDev= NoobDev &{ // intersection  type
  name:string
  expertise:string
  experience:number
  level:Level
}
enum Level{
  junior='junior',
  Middle='middle',
  Senior='senior'
}

const newDev2: NoobDev | JuniorDev={ // union type
  name:'abc',
  expertise:'js',
  experience:1,
  // age:3
}
const newDev: JuniorDev={
  name:'abc',
  expertise:'js',
  experience:1,
  level:Level.Senior
  // age:3
}