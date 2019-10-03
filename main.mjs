
import * as math from "./math.mjs";

let input = process.argv.slice(2);
let method = input[0];

input = input.map(el => +el);

let x = input[1];
let y = input[2];

let example = 0;

if(method === "add") {
  example = math.add(x, y);
} else if (method === "subtract"){
  example = math.subtract(x, y);
} else if (method === "multiply") {
  example = math.multiply(x, y);
}

console.log(example);
