const printArgs = (args: string): void => console.log(...args);
printArgs('Hello world!');

const person = {
  name: 'Roger',
  last_name: 'Gol D.',
  showName(): void {
    console.log(`I'm ${this.last_name} ${this.name}`);
  },
};
person.showName();

export default { person };
