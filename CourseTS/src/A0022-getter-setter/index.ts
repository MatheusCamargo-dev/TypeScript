export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number,
    protected _cpf: string,

  ){}


  set cpf(cpf: string){
    this._cpf = cpf;
  }

  get cpf():string {
    return this._cpf.replace(/\D/g, '');
  }

}


const person = new Person('Luffy', 'Monkey D.', 21, '111.111.111-11');


console.log(person.cpf)

