type Age = number;
type ColorsRGB = 'red' | 'green' | 'blue';
type Person = {
  firstName: string;
  age: Age;
  salary: number;
  favoriteColor: ColorsRGB;
};

export default function newPerson(person: Person): Person {
  console.log(person);
  return person;
}

newPerson({
  firstName: 'Matheus',
  age: 18,
  salary: 10000,
  favoriteColor: 'red',
});

const person: Person = {
  firstName: 'Luffy',
  age: 22,
  salary: 10000,
  favoriteColor: 'blue',
};

console.log(person);
