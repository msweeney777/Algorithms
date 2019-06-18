// Cli parses the values of the array - in this case three arrays of three
// values are hard coded in for the function to effectively work.
let arr1 = (process.argv.slice(2, 5));
let arr2 = (process.argv.slice(5, 8))
let arr3 = (process.argv.slice(8, 12))

// These three arrays are then pushed into one big array which represents a
// matrix
let arr = [];
arr.push(arr1);
arr.push(arr2);
arr.push(arr3);

// The values within the three arrays are then iterated through so they can be
// turned from strings into integers
for(let i = 0; i < arr.length; i++) {
  for(let j = 0; j < arr[i].length; j++) {
      arr[i][j] = +arr[i][j];
  }
}

//Takes the matrix and finds the absolute difference of the two sums of
//diagonal values.
function diagonalDifference(arr) {
  let row = 0;
  let col = arr[0].length - 1;
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum -= arr[row][row] - arr[row++][col--];
  }
  sum = Math.abs(sum);
  console.log(sum);
}

// An alternative approach that is somewhat more easy to follow.
function diagonalAlternative(arr) {
  let n = arr[0].length;
  let sum1 = 0;
  let sum2 = 0;

  for(let i = 0, j = n - 1; i < n; i++, j--) {
    sum1 += arr[i][i];
    sum2 += arr[j][i];
  }
  let sum = Math.abs(sum1 - sum2);
  console.log(sum);
}

diagonalDifference(arr);

diagonalAlternative(arr);
