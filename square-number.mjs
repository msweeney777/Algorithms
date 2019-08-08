
let input = process.argv.slice(2).pop();

isSquare(input)

function isSquare(n) {
  n = Number(n);
  let result = false;

  let root = Math.floor(Math.sqrt(n));
  
  //n > 0 && Math.sqrt(n)  % 1 === 0 ? console.log(true) : console.log(false);
  n === Math.pow(root, 2) ? console.log(true) : console.log(false)
}
