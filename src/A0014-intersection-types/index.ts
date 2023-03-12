type Name = { name: string };
type LastName = { lastName: string };
type Age = { age: number };
type Person = Name & LastName & Age; // & = AND intersection operator
type AB = 'A' | 'B'; // | = or intersection operator
type AC = 'A' | 'C'; // | = or intersection operator
type Intersection = AB & AC;

const inters: Intersection = 'A';
console.log(inters);

const person: Person = {
  name: 'Roronoa',
  lastName: 'Zoro',
  age: 18,
};

console.log(person);

export default null;
