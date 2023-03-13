export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number,
    protected cpf: string,

  ){}


  public getFullName() : string {
    return 'Person: '+this.lastName+ ' '+this.firstName;
  }


}
export class Student extends Person {

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    cpf: string,
    public course: string,
  ){
    super(firstName, lastName, age, cpf);
    this.course = course;

  }

  public getFullName() : string {
    return 'Student: '+this.lastName+ ' '+this.firstName;
  }
};

export class Client extends Person {
  public getFullName() : string {
    return 'Client: '+this.firstName+ ' '+this.lastName;
  }
};

const person = new Person('Luffy', 'Monkey D.', 21, '111.111.111-11');
const student = new Student('Zoro', 'Roronoa', 21, '111.111.111-11', 'TypeScript');
const client = new Client('Sanji', 'Vinsmoke', 26, '111.111.111-11');

console.log(person.getFullName())
console.log(student.getFullName())
console.log(client.getFullName())


