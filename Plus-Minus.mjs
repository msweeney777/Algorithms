// An algorithm for determining three ratios for the fractions of elements of
// the fed array that are positive, negative and zero;
let arr = (process.argv.slice(2));

plusMinus(arr)

function plusMinus(arr) {
//Storage of sums of positive, negative and zero numbers
  let positiveSum = 0;
  let negativeSum = 0;
  let zeroSum = 0;

//For loop computes the sums of each
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      positiveSum++;

    } else if(arr[i] < 0) {
      negativeSum++;

    } else {
      zeroSum++;

    }
  }

// Finally sums are turned into ratios and printed to the console.
  positiveSum /= arr.length;
  negativeSum /= arr.length;
  zeroSum /= arr.length;
  console.log(positiveSum);
  console.log(negativeSum);
  console.log(zeroSum);

}
