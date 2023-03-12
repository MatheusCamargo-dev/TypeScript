const objectA: {
  keyA: string;
  readonly keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'a',
  keyB: 'b',
};

objectA.keyA = 'other value';
// objectA.keyB = 'other key'; //keys readonly can't change your values
objectA.keyC = 'new value';
objectA.keyD = 'D Key';
