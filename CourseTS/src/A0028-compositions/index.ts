export class Car {
  private readonly motor = new Motor();

  turnOn(): string{
    this.motor.on();
    return `car on`;
  }

  turnOff(): string{
    this.motor.off();
    return `car off`;
  }

  speedUp(acc: number){
    this.motor.speedUp(acc);
    return `Car velocity: ${this.motor.velocity}`
  }
}

export class Motor{
  constructor(
    private _status: boolean = false,
    private _velocity: number = 0,
  ){}

  get status(): boolean{
    return this._status;
  }

  get velocity(): number{
    return this._velocity;
  }

  on(){
    this._status = true;
  }

  off(){
    this._status = false;
  }

  speedUp(acc: number){
    this._velocity += acc;
  }
}

const car = new Car();
console.log(car.turnOn())
console.log(car.speedUp(100))
