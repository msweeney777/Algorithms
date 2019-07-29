//This function parses the cli for 10 integers and puts them into a phone
//number input
let input = process.argv.slice(2);

createPhoneNumber(input);

function createPhoneNumber (numbers) {

  //let string = "";
  //for(let i = 0; i < numbers.length; i++) {
  //  if(string === "") {
  //    string += '('
  //  } else if (string.length  === 4) {
  //    string += ') '
  //  } else if (string.length === 9) {
  //    string += '-'
  //  }

  //  string += numbers[i];
  //}
  //console.log(string);
  //return string;
  
  numbers = numbers.join('');
  numbers = '(' + numbers.substring(0, 3) + ') ' 
    + numbers.substring(3, 6) 
    + '-' + numbers.substring(6);
  console.log(numbers);
}
