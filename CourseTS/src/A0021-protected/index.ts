export class Company {
  public readonly name: string;
  protected readonly collaborators: Colaborator[] = [];
  private readonly cnpj: string;

  constructor(name: string, cnpj:string){
    this.name = name;
    this.cnpj = cnpj;
  }

  /**
   * addColaborator
   */
  public addColaborator(colaborator: Colaborator):void {
    this.collaborators.push(colaborator);
  }
}
class Colaborator{
  constructor(
    public readonly firstName: string,
    public readonly lastName: string
  ){}


}

export class Udemy extends Company {
  constructor(){
    super('Udemy', '111.111.111/0001-11');
  }

  pop(): Colaborator | null {
    const colaborator = this.collaborators.pop();
    if(colaborator) return colaborator;
    return null;
  }
}

const udemy = new Udemy();
const colaborator = new Colaborator('Sanji', 'Vinsmoke');
const colaborator2 = new Colaborator('Roronoa', 'Zoro');

udemy.addColaborator(colaborator)
udemy.addColaborator(colaborator2)
udemy.pop()
console.log(udemy);
