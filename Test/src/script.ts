console.log("Hello World!")

const country = "Bangladesh";
console.log(country)

const arrowFunc = ()=>{
    console.log("Arrow function");
}

const myName = "Rashed Abdullah"

let string = "Rashed";

const funcType = (a:number, b:number)=>{
    return a + b;
}
console.log(funcType(5,5));


const arr:string[] = ["Labib", "Habib", "Ismat"];
arr.push("32");

let str:string;

const arrNum:number[] = []

const strOrNum:(number | string)[] = [];

let anyType:any = "";
anyType = 40;


let func:Function;
func = (a:number, b:string, c?:boolean, d:{}, e:string = "This is string default value")=>{
    console.log("My Name");
    return a;
};


// Type aliases:
type strs = string;
let variable:strs;
variable = "";

// function signatures:
let myFunc:(a:number, b:string, c:boolean) => void; // if i don't want to return anything.
let myFunc2:(a:number, b:string, c:boolean) => string;