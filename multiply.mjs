
let input = process.argv.slice(2);
input = input.map(Number);

let a = input[0];
let b = input[1];

multiply(a, b)

function multiply(a, b) {
  let value = a * b;
  console.log(value);
  return value;
}
