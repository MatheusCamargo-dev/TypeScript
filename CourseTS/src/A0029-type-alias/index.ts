type TypePerson = {
  firstName: string;
  lastName: string;
  fullName(): string;
};

export class Person implements TypePerson {
  constructor(public firstName: string, public lastName: string) {}

  fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
const p1 = new Person('Sanji', 'Vinsmoke');
console.log(p1.fullName());
