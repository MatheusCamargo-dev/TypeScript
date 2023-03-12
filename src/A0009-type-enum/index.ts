enum Colors {
  RED,
  BLUE,
  YELLOW,
}

enum Colors {
  BLACK = 9999,
}

console.log(Colors[0]);
console.log(Colors[1]);
console.log(Colors[2]);
console.log(Colors.RED);
console.log(Colors.BLUE);
console.log(Colors.YELLOW);
console.log(Colors[9999]);

function chooseColor(color: Colors): void {
  console.log(Colors[color]);
}

chooseColor(Colors.RED);
chooseColor(99999999999999);
