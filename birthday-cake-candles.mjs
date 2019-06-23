//In this excercise the quantity of largest number(s) is calculated from an
//an array of integers fed from the command line.

//Parses an array of integers from the command line
let arr = (process.argv.slice(2));

//Maps the entire array so that each element can be converted from a string into
//an integer - not necessary in this particular case given the nature of the
//sort command, however, a good habit given the need to manipulate integer
//string taken from the command line.
arr = arr.map(el => +el);


birthdayCakeCandles(arr);

//Sorts the array into ascending order, then tallies the number of 'candles'
//with the biggest number and prints them to the console
function birthdayCakeCandles(arr) {
  arr.sort((a,b) => a - b);
  console.log(arr);
  let candles = 0;
  for(let i = 0; i< arr.length; i++) {
    if(arr[i] == arr[arr.length - 1]) {
      candles++;
    }
  }
  console.log(candles);
}
