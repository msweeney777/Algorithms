
let input = process.argv.slice(2);

input = input.map(Number);

let a = input[0];
let b = input[1];

getSum(a, b)

function getSum(a,b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  if(a === b) {
    console.log(a);
    return a;
  }
  //Use Gauss's formula to determine the total sum of consecutive numbers
  //between the min and the max.
  let lengthOfSequence = ((max-min + 1));
  let numberOfIntervals = (min + max) / 2
  let totalSum = lengthOfSequence  * numberOfIntervals;
  console.log(totalSum);

}

