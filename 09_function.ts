function add(a: number, b: number): number {
  return a + b;
}

function greet(msg: string, name: string): string {
  return `${msg} ${name}`;
}

console.log(add(3, 8));
console.log(greet("Hello", "World"));

function addAndPrint(a: number, b: number, cb: (n: number) => void): void {
  let sum = a + b;

  cb(sum);
}

addAndPrint(2, 6, (n: number): void => {
  console.log(n);
});
