export class Writer {
  private _tool: Tool | null = null;
  constructor(private _name: string){}

  set name(name: string){
    this._name = name;
  }

  get name(): string{
    return this._name;
  }
  set tool(tool: Tool | null){
    this._tool = tool;
  }

  get tool(): Tool | null{
    return this._tool;
  }

  write(){
    if(this.tool === null) {
      console.log(`${this.name} can't write without tool.`)
      return;
    }else{
      this.tool.write();
    }

  }
}

export abstract class Tool {
  constructor(private _name: string) {}
  abstract write(): void;
  get name(): string{
    return this._name;
  }
}

export class Pen extends Tool {
  write(): void{
    console.log(`${this.name} is writing ...`)
  }
}

export class TypeWriter extends Tool {
  write(): void{
    console.log(`${this.name} is typing ...`)
  }
}

const writer = new Writer('Stephen King');
const writer2 = new Writer('William Shakespeare');
const pencil = new Pen('bic');
const machineWrite = new TypeWriter('HP');

console.log(writer);
console.log(pencil);
console.log(machineWrite);

writer.write()
writer2.tool = pencil;
writer2.write()
