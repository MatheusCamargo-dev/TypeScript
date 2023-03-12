// let a: 100 = 100; //eslint-disable-line
// a = 120; \\error

let a = 100 as const; //eslint-disable-line
// a = 99; \\ error
console.log(a);

const person = {
  firstName: 'Sanji' as const,
  lastName: 'Vinsmoke',
};

// person.firstName = 'Black Leg'; \\error this value can't be redeclared
person.lastName = 'Mr. Prince';
console.log(person);

function chooseColors(color: 'red' | 'blue' | 'yellow') {
  return color;
}
console.log(chooseColors('red'));
// Module mode
export default null;
