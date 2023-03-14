export abstract class Character {
  protected abstract emoji: string;
  constructor(
    protected name: string,
    protected atq: number,
    protected lp: number,
  ){}

  attack(enemy: Character):void {
    this.speechAtq();
    enemy.loseLP(this.atq);
  }

  loseLP(atq: number):void {
    this.lp -= atq;
    console.log(`${this.name} now has ${this.lp} life points.`)
  }

  abstract speechAtq(): void;

}

export class Warrior extends Character{
  protected emoji = '\u{1F9DD}';
  speechAtq(): void {
    console.log(`Warrior ${this.emoji}: attack!!!!!`)
  }
}
export class Monster extends Character{
  protected emoji = '\u{1F9DF}';
  speechAtq(): void {
    console.log(`Monster ${this.emoji}: QWRTYREQSDGHAW!!!!!`)
  }
}

const bardiche = new Warrior('Bardiche', 2700, 2700);
const blueEyes = new Monster('Blue Eyes', 3000, 2500);

bardiche.attack(blueEyes);
blueEyes.attack(bardiche)
// console.log(blueEyes.lp)

