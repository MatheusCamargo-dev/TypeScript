class Company {
  public readonly name: string;
  private readonly collaborators: Colaborator[] = [];
  protected readonly cnpj: string;

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

const company = new Company('Baratie', '11.111.111/00001-11');
const colaborator = new Colaborator('Sanji', 'Vinsmoke');

company.addColaborator(colaborator);
console.log(company)
