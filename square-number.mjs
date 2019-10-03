// This simple algorithm determines whether or not the given integer n is a
// square number or 'perfect square';

let input = process.argv.slice(2).pop();

isSquare(input)

function isSquare(n) {
  n = Number(n);

  let root = Math.floor(Math.sqrt(n));
  
  n === Math.pow(root, 2) ? console.log(true) : console.log(false)
}
