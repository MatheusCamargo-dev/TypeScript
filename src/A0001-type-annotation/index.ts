/* eslint-disable */
let names: string = 'Luffy';
let age: number = 30;
let adult: boolean = true;
let symbol: symbol = Symbol('any-symbol');
// let big: bigint = 10n;

let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfCharacters: Array<string> = ['a','b','c'];
let arrayOfBoolean: boolean[] = [true, false];

let person: { name: string, age: number, adult?: boolean } = {
  age: 18,
  name: 'Sanji',
};

function sum(x: number, y:number): number{
  return x + y;
}

const sum2: (x: number, y:number) => number = (x,y) => x + y;

const result = sum(2, 2);



