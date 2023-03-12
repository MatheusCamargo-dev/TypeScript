// Array<type> or type[];
function multiplyArgs([...args]: Array<number>): number {
  return args.reduce((ac, value) => ac * value);
}

export function concatStrings(...args: string[]) {
  return args.reduce((ac, value) => ac + value);
}

export function toUpperCaseNew(...args: string[]) {
  return args.map((val) => val.toUpperCase());
}
export const result = multiplyArgs([1, 2, 42]);
console.log(result);

console.log(concatStrings('Monkey D.', ' Luffy'));
console.log(toUpperCaseNew('a', 'b', 'c'));
