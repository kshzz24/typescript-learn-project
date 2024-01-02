"use strict";
//const a = 344;
// defining a variable
// 1
let b = 12;
let c = "12";
console.log(typeof b + " " + b);
console.log(typeof c + " " + c);
let ans = false;
// type -- any
// value = undefined
let x;
let y;
console.log(typeof x + " " + x);
// 2 way
let naam = 343;
// union variable
let surname;
surname = "555";
console.log(typeof surname + " " + surname);
surname = 123;
console.log(typeof surname + " " + surname);
//  function name ( params: typeof(params)) : typeof(function)
const func = (x, y) => {
    return x * y;
};
const func2 = (n, m) => {
    return n + m;
};
//  arrays
const arr = [123, 3123, 12312, 12311];
// THis will not work
//  const arr2:number = [123,123,123,123,123];
// correct way
const arr3 = [123, 123, 123, 123, 123];
const arr4 = [];
const arr5 = [];
console.log(arr5 + " " + typeof arr5); //  object
const arr6 = [];
console.log(arr6 + " " + typeof arr6); //  object
// Objects
const obj = {
    ht: 123,
    wt: 123,
};
const obj1 = {
    gender: "1",
    height: 12,
    weight: 12,
};
const obj2 = {
    // stil no error if optional element is not defined
    height: 12,
    weight: 12,
};
const ggwp = {
    height: 12,
    weight: 34,
    isMale: true,
    func2: (n, x) => console.log(x * n),
};
const gg1 = {
    height: 123,
    weight: 23,
    func2: (n, m) => console.log(n + m),
    isMale: true,
};
gg1.func2(12, 12);
ggwp.func2(12, 12);
const func3 = (n, m, l = 20) => {
    if (typeof l === "undefined")
        return n * m;
    return n * m * l;
};
let v1 = func3(1, 2, 3);
console.log(v1);
const fa = (...m) => {
    return m;
};
const x1 = fa(1, 23, 4, 5, 6, 7, 7);
console.log(x1);
// Nver type 
const err = new Error();
const errorHandler = () => {
    throw new Error();
};
// classes 
class Player {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}
// could be shortended as
class Player1 {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.getMyHeight = () => this.height;
    }
}
const abhi = new Player1(100, 150, 23);
console.log(abhi.weight);
class Player2 extends Player1 {
    constructor(height, weight, power, urmy) {
        super(height, weight, power);
        this.urmy = urmy;
    }
}
const s1 = new Player2(1, 2, 3, false);
console.log(s1.);
