// This simple algorithm uses a regex to determine whether or not the first
// value of a integer string is 1,2 or three
let input = process.argv.slice(2).pop();

validateCode(input);

// The traditional way of declaring functions returning a regex value if it is
// true
function validateCode (code) {
  
  return /^[1-3]/g.test(code);
}

//console.log(validateCode(input))

// Returning a true or false value ES6 style
const valCode = (code) => /^[1-3]/.test(code);

console.log(valCode(input))
