// A simple algorithm that utilizes a regex to put a space after a capital
// letter and return said string
let input = process.argv.slice(2).pop();

const removeCc = str => str.replace(/([A-Z])/g, ' $1');

const removeCaps = str => str.replace(/([A-Z])/g, u => u.toLowerCase())

const makeCap = str => str.replace(/^[a-z]/, u => u.toUpperCase());

//console.log(removeCc(input));
//console.log(removeCaps(input));
console.log(makeCap(removeCaps(removeCc(input))));
