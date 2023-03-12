//  *-*-*-*-*-*-*-*-*-*-*-*- Recommended *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

// Conditional
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'null';

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*- Not Recommended -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

// Non-full assertion(!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion using sub types
const body4 = document.querySelector('body') as unknown as number;
console.log(body4 * 2);

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
