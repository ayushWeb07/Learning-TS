
// add function
function add(n1: number, n2: number, shouldPrint: boolean): number {
  if (shouldPrint) {
    console.log(`${n1} + ${n2} = ${n1 + n2}`);
  }

  return n1 + n2;
}

// print name
function printFullName(firstName: string, lastName: string): string {
    
    return `${firstName} ${lastName}`
}

const sum = add(2, 3, true);
console.log(sum)

console.log(printFullName("Ayush", "GOAT"))