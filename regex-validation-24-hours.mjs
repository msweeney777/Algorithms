
let input = process.argv.slice(2).pop();


console.log(input);
//validateTime(input);

//function validateTime(time) {
//  return /\:/.test(time)
//
//}

const validateTime = time => /^([01]?[0-9]|2[0-3])\:[0-5][0-9]/.test(time);

console.log(validateTime(input));
