//Task:
//
//1.) Delete a pair of lowercase letters that match. If the final string is
//empty, print "Empty String"
let string = process.argv.slice(2).pop();

superReducedString(string);

function superReducedString(s) {
  console.log(string);
  let patt = /^([a-z])\1+$/;
  let result = patt.test(string)
  for(let i = 0; i < string.length; i++) {
    if(result) {

    }
  }

}
