// If the passed in argument from the cli contains exactly four or six digits
// return true; otherwise return false

let input = process.argv.slice(2).pop();

validatePIN(input);


function validatePIN (pin) { 
  if(pin.length === 4 || pin.length === 6) {
    if(/^(\d{4}|\d{6})$/.test(pin)) {
      console.log(true);
      return true;
    }
    console.log(false);
    return false;
  }
}
