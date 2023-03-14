export class Person {
  static defaultCPF = '000.000.000-00';
  static defaultAge = 25;
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number,
    protected cpf: string,

  ){}

  static createPerson(firstName: string, lastName: string ): Person {
    return new Person(firstName, lastName, Person.defaultAge, Person.defaultCPF );
  }

  defaultValues():void {
    console.log(Person.defaultAge, Person.defaultCPF);
  }
}


const person = Person.createPerson('Sanji', 'Vinsmoke');
console.log(person)
person.defaultValues()


