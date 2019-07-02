
let input = (process.argv.slice(2));

let a = input[0];
let b = input[1];

LongestCommonSubsequence(a, b);

function LongestCommonSubsequence (a, b) {

  //Sets up a "matrix" needed to determine the longest common subsequence of a
  //and b and fills them with 0 place holders
  const arr = Array(b.length + 1).fill(0).map(() => Array(a.length + 1).fill(0));

  //Fills out the matrix to get a the solution - that is the numerical value
  //for the longest common subsequence
  for (let rowIndex = 1; rowIndex <= b.length; rowIndex += 1) {
    for(let columnIndex = 1; columnIndex <= a.length; columnIndex += 1) {
      if(a[columnIndex - 1] === b[rowIndex - 1]) {
        arr[rowIndex][columnIndex] = arr[rowIndex - 1][columnIndex - 1] + 1;
      } else {
        arr[rowIndex][columnIndex] = Math.max(
          arr[rowIndex - 1][columnIndex],
          arr[rowIndex][columnIndex - 1]
        )
      }
    }
  }
  console.log(arr);

  //Calculating the longest common subsequence from the result of the matrix
  //
  //Returns and empty string if the length of the largest common string is zero
  if (!arr[b.length][a.length]) {
    return [''];
  }

  const longestSequence = [];
  let columnIndex = a.length;
  let rowIndex = b.length;

  while(columnIndex > 0 || rowIndex > 0) {
    //If the character in string-a equals the character in string-b, then said
    //character will be added to the longestSubsequence array, although while
    //moving in a diagonal left-top direction
    if(a[columnIndex - 1] === b[rowIndex - 1]) {
      longestSequence.unshift(a[columnIndex - 1]);
      columnIndex -= 1;
      rowIndex -= 1;
    //else if the the characters do not match and the iterated item equals the
      //previous item in the array, the while loop will continue to iterate in
      //a leftward direction
    } else if (arr[rowIndex][columnIndex] === arr[rowIndex][columnIndex - 1]) {
      columnIndex -= 1;
    //otherwise, if the neither character is equal, and the character to the
      //left is not equal, the while loop will iterate upward by one row 
    } else {
      rowIndex -= 1;
    }
  }
  console.log(longestSequence);
  return longestSequence; 
  
}
