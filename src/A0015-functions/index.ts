type MapStringCallback = (item: string) => string;
export function mapString(
  array: string[],
  callbackfn: MapStringCallback,
): string[] {
  const newArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }

  return newArray;
}

const mugiwaras = ['Luffy', 'Sanji', 'Zoro'];
const mapUpperCase = mapString(mugiwaras, (item) => item.toUpperCase());

console.log(mapUpperCase);
