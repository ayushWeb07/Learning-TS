// define custom type alias
type NumberYaString = number | string;

function add_yah_concat_v2(
  a: NumberYaString,
  b: NumberYaString
): NumberYaString {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return `${a} ${b}`;
  }
}

console.log(add_yah_concat_v2(10, 5));
console.log(add_yah_concat_v2("hey", "world"));

// product info
type ProductInfo = {
  name: string;
  company: string;
  price: number;
  isAvailable: boolean;
};

const prod: ProductInfo = {
  name: "Lark M2",
  company: "Hollyland",
  price: 9000,
  isAvailable: true,
};


console.log(prod)