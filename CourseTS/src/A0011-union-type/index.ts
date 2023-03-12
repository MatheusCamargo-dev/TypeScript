function add(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  if (typeof a === 'string' && typeof b === 'string') return a + b;
}
// if (typeof a === typeof b) return a + b; \\ error
console.log(add(10, 10));
