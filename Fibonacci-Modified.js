let bigNum = require('bignumber.js');
bigNum.config({ EXPONENTIAL_AT: 1e+9, POW_PRECISION: 0});

//This trickier problem finds the nth term of a fibonacci sequence using the
//very first two terms represented as the first and second elements in the
//parsed set of three numbers.
//
//Parses the t1, t2 and n from the cli
let input = (process.argv.slice(2));


//These parsed string-integers are then stored in variables which are then
//passed in as parameters into the fibonacciModified function
let a = input[0];
let b = input[1];
let num = input [2];

fibonacciModified(a, b, num);

//fibonacciAlternative(a, b, num);

//t1 and t2 are put into a special array where they are mapped and turned into
//special objects that can be manipulated like numbers with the specific
//intention of allowing for large integers to be represented in the command
//line. These objects are then manipulated in a specially modified fibonacci
//equation and then added together to return the desired nth term.
function fibonacciModified(t1, t2, n) {
  let arr = [t1, t2].map(BigInt);
  while (arr.length < n) {
    arr.push(arr[arr.length - 2] + arr[arr.length-1] ** 2n);
  }
  let number = arr[arr.length - 1].toString();
  console.log(number);
  return number;
}


//An alternative function that uses the imported 'BigNumber' constructor function to turn large number into objects so that large numbers can be precisely manipulated and then printed out into a string format with the toString() function.
function fibonacciAlternative(t1, t2, n) {
  let arr = [t1, t2];
  let result = "";
  for(let i = 2; i < n; i++){
    let a = bigNum(arr[i-2]);
    let b = bigNum(arr[i-1]);
    arr[i] = new bigNum(a.plus(b.pow(2)));
    result = arr[i].toFixed();
  }
  console.log(result);
  return result;

}
