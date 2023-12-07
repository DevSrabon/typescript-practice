// a type depended on another type

// type a1 = number
// type a2 =  a1 extends string ? string : number          // string
type a1 = null;
type a3 = undefined;
type a4 = number;

type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;
// never

type Sheikh = {
  wife1: string;
  wife2: string;
};

type A = keyof Sheikh; // 'wife1' | 'wife2'

// type checkProperty<T> = T extends "wife1" ? true : false;//false
// type checkProperty<T> = T extends { wife1: string } ? true : false; //true
type checkProperty<T, K> = K extends keyof Sheikh ? true : false; //true

type checkWife1 = checkProperty<Sheikh, "wife1">;

// remove type
type Bandhubi = "Monika" | "Jubin";

// type RemoveBandhubi<T> = T extends "Monika" ? never : T; // 'Jubin'

// type CurrentBandhubi = RemoveBandhubi<Bandhubi>; // 'Jubin'

type RemoveBandhubi<T, K> = T extends K ? never : T; // 'Jubin'

type CurrentBandhubi = RemoveBandhubi<Bandhubi, "Monika">; // 'Jubin'
