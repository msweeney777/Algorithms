// If the passed in argument from the cli contains wxactly four or six digits
// return true; otherwise return false

let input = process.argv.slice(2).pop();

//Turn the string into an integer
//input = parseInt(input, 10);
//console.log(input)

validatePIN(input);

function validatePIN (pin) {
  let pinLength = pin.toString().length;
  for(let i = 0; i < pin.length; i++) {
    if(pin.charAt(i) === '.') {
      //pin = pin.replace('.', '');
      //console.log(pin);
      pinLength -= 1;
    }
  }
  pin = Math.abs(pin);
  console.log(pin)
  //input = parseInt(input, 10);
  console.log(pinLength);
  if(!isNaN(pin) && pinLength === 4 || pinLength === 6) {
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
}
