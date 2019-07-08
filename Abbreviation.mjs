//This algorithm is essentially a variation on the determining the longest
//common subsequence of two strings. This problem entails whether or not a
//longest common subsequence can exist between two strings wherein one, the
//b-string is entirely capitalized whereas the a-string is not. If a-string can
//be properly manipulated to match the b-string, the algorithm will return a
//YES, otherwise it will return a no. In order to solve this problem two
//operations are allowed in the following order: 1.) zero or more of a's lowercase letters can be
//capitalized. 2.) All of the remaining lowercase letters can be deleted.

let input = (process.argv.slice(2));

let a = input[0];
let b = input[1];

abbreviation(a, b);

//This function will iterate through the given string and determine whether or
//not each character is lowercase. If said character is lowercase, the true
//boolean value will be returned, otherwise, false will be returned.
function hasUpperCase(str) {
  for (let i = 0; i < str.length; i++) {
    //If the first character is uppercase, return true, otherwise return false
    if (str.charAt(i).toUpperCase() === str.charAt(i)) {
      return true;
    }
    return false;
  }
}

function abbreviation(a, b) {
  let arr = [];


  //Creates a matrix of arrays that reflect the number of
  //characters in the string + 1, and are filled with a boolean value that
  //reflects whether or not the first character in the string is capitalized; if
  //the first character is capitalized all subsequent values in the first
  //'column' will be false with the exception of the very first value which
  //must always be true
  for(let i = 0; i <= a.length; i++) {
    arr[i] = [];
    arr[i][0] = true;
  }
  //console.log(arr);

  // Iterates through and adds a false boolean to the first array value within
  // the matrix so it reads 'true' instead of 'false'
  for (let i = 0; i <= b.length; i++) {
    arr[0][i] = false;
    //console.log(arr)
  }
  arr[0][0] = true;
  //console.log(arr);

  for(let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      //If under the circumstances, the a-value is capitalized and does not
      //match the b-string, none of the if-statements will hold true and a
      //false value will be added to the given array and column
      let temp = false;

      // If the the character at hand in the first (a) string equals a
      // character in the second (b) string then the second to last array value
      // in the second to last array will be the temp value
      if(a.charAt(i - 1) === b.charAt(j - 1)) {
        temp = arr[i - 1][j - 1];
        console.log(`Both string characters '${a.charAt(i-1)}' and '${b.charAt(j-1)}' are identical; the temp value can be drawn from the value diagonal to it.`);
      }
      // If temp is not true and the uppercase version of the character at hand
      // equals the b string character at hand, then the temporary value equals
      // the first value from the penultimate array
      else if (temp !== true && a.charAt(i - 1).toUpperCase() === b.charAt(j - 1)) {
        console.log(`The a character '${a.charAt(i-1)}' and the b character '${b.charAt(j-1)}' are equal after the a character has been capitalized therefore the new boolean value will be identical to the value diagonal to it.`);
        temp = arr[i - 1][j - 1];
      }
      // Otherwise if the temporary value does not equal true and the character
      // at hand (a) is already capitalized and failed to match up with the
      // first if-statment, that is it is does not equal a capitalized value in
      // the b string, then the temp value is taken from the previous value in
      // the same column
      else if (temp !== true && a.charAt(i - 1).toUpperCase() !== a.charAt(i - 1)) {
        console.log("The character at hand is not capitalized and does not match a b-string character therefore its value can be drawn vertically from the previous column value.")
        temp = arr[i - 1][j];
      } else {
        console.log('The values of a and b are both capitalized and do not equal one another. The given column and row value will be therefore be false.');
      }
      // The temporary value is then added on as the last value of the last
      // array
      arr[i][j] = temp;
      console.log(arr);
    }
  }
  // If the last value of the last array within the matrix is true return yes,
  // otherwise return false.
  if (arr[a.length][b.length]) {
    console.log('YES');
    return 'YES';
  }
  console.log('NO');
  return 'NO';
}
