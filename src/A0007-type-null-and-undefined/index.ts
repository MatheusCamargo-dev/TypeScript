let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 100);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return { firstName, lastName }; //<= The last name may or may not be null.
}
console.log(createPerson('Sanji'));

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const val = squareOf(2);
if (val === null) {
  console.log('invalid value');
} else {
  console.log(val * 100);
}
