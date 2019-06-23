//This algorithm uses one of two functions to determine the minimum and maximum
//values that can be calculated by summing exactly four out of the five
//integers which are then printed out on the console as a single line of
//two-spaced integers.

//Parses the given five digits from the command line
let arr = (process.argv.slice(2));

//The for loop iterates through each element in the array and turns them from a
//string into a number which will allow for them to be manipulated as numbers
for(let i = 0; i < arr.length; i++) {
      arr[i] = +arr[i];
}

miniMaxSum(arr);

alternativeMaxSum(arr);

//The following array sorts the elements in the array in ascending order, then
//slices the first four elements and the last four elements respectively, sums
//them into a minSum and maxSum and then prints them to the console
function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  
  let minSum = arr.slice(0, arr.length - 1);
  minSum = minSum.reduce((a,b) => a + b);

  let maxSum = arr.slice(1, arr.length);
  maxSum = maxSum.reduce((a,b) => a + b);
  
  console.log(minSum + " " + maxSum);
}

//This alternative functions sorts elements in the array into ascending order,
//totals all the elements, then subtracts the last element or the first element
//from the sum to get a maxSum and minSum respectively
function alternativeMaxSum(arr) {
  arr.sort((a, b) => a - b);

  let sum = arr.reduce((a,b) => a + b);
  let minSum = sum - arr[arr.length - 1];
  let maxSum = sum - arr[0];

  console.log(minSum + " " + maxSum);
}
