
let input = process.argv.slice(2).pop();

descendingOrder(input);

function descendingOrder(n) {
  n = n.split('').sort((a, b) => b - a).join('');
  console.log(n);
  return n;
}
