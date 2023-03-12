export function createError(msg: string): never {
  throw new Error(msg);
}

console.log(createError('any error'));
