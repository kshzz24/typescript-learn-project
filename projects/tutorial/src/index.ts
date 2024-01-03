//const a = 344;

// defining a variable

// 1

let b: number = 12;
let c: string = "12";

console.log(typeof b + " " + b);
console.log(typeof c + " " + c);

let ans: boolean = false;
// type -- any
// value = undefined
let x;
let y: any;

console.log(typeof x + " " + x);

// 2 way

let naam = <number>343;

// union variable

let surname: string | number;

surname = "555";
console.log(typeof surname + " " + surname);

surname = 123;

console.log(typeof surname + " " + surname);

//  function name ( params: typeof(params)) : typeof(function)
const func = (x: number, y: number): number => {
  return x * y;
};

// type def

type UserName = (x: number, y: number) => number;

const func2: UserName = (n, m) => {
  return n + m;
};

//  arrays
const arr = [123, 3123, 12312, 12311];
// THis will not work
//  const arr2:number = [123,123,123,123,123];
// correct way
const arr3: number[] = [123, 123, 123, 123, 123];
const arr4: Array<number> = [];
const arr5: Array<any> = [];

console.log(arr5 + " " + typeof arr5); //  object

const arr6: Array<number | string> = [];

console.log(arr6 + " " + typeof arr6); //  object

// Objects

const obj = {
  ht: 123,
  wt: 123,
};

type Obj = {
  height: number;
  weight: number;
  gender: string;
};

const obj1: Obj = {
  gender: "1",
  height: 12,
  weight: 12,
};

// to make any property optional made add '?' infront of typeDeclaration of the attribute

type Obj2 = {
  height: number;
  weight: number;
  gender?: string;
};

const obj2: Obj2 = {
  // stil no error if optional element is not defined
  height: 12,
  weight: 12,
};

// Interface

// similar to class and obj in c++
interface Obj3 {
  height: number;
  weight: number;
  gender?: string;
}

interface Student extends Obj3 {
  isMale: boolean;
  // function which take no params but return a number
  func?: () => number;
  func2: (n: number, x: number) => void;
}

const ggwp: Student = {
  height: 12,
  weight: 34,
  isMale: true,
  func2: (n: number, x: number) => console.log(x * n),
};

const gg1: Student = {
  height: 123,
  weight: 23,
  func2: (n, m) => console.log(n + m),
  isMale: true,
};

gg1.func2(12, 12);
ggwp.func2(12, 12);

// functions

type FuncType = (n: number, m: number, l?: number) => number;
const func3: FuncType = (n, m, l=20) => {
  if (typeof l === "undefined") return n * m;
  return n * m * l;
};
let v1 = func3(1, 2, 3);
console.log(v1);

// Rest Operator

type Fun = (...m: number[]) => number[]
const fa:Fun = (...m) =>{
   return m;
}
const x1:number[] = fa(1,23,4,5,6,7,7);
console.log(x1);

// Nver type 
const err = new Error();

const errorHandler = () =>{
   throw new Error();
}


// classes 


class Player {
  private height;
  public weight;

   constructor(height:number, weight:number){
     this.height = height;
     this.weight = weight;
   }
}

// could be shortended as


class Player1{
  constructor(private height:number, public weight:number, protected power:number){
       
  }

  getMyHeight = () => this.height; 
}

const abhi = new Player1(100, 150, 23);
console.log(abhi.weight);

class Player2 extends Player1{
   urmy: boolean; 
  constructor(height: number, weight: number, power: number, urmy:boolean){
     super(height, weight, power)
     this.urmy = urmy
    }
}
const s1 =  new Player2(1,2,3,false);

console.log(s1.urmy);

// type assertion

 // const btn = document.getElementById("btn") as HTMLElement; 
 // const btn = <HTMLElement> document.getElementById("btn");
 // btn.onclick;

 interface Person {
    name:string,
    email:string,
 }

 const o1:Person = {
   name : "ksjiti",
   email : "asdasda"
 };


  const getName = ():string =>{ return o1.name;}
  const getEmail = ():string => { return o1.email;}
  
  const getData = (key:string) =>{
    return o1[key as keyof Person]
  }


 console.log(getEmail());
 console.log(getName());
 console.log(getData("email"));
 
 

 // utility Classes

 // 1 Parital type

type User = {
  name:string,
  email:string,
}

type User2 = Partial<User>
//   type User2 = {
//   name?: string | undefined;
//   email?: string | undefined;
// }

// Required Type -- opposite to parital

