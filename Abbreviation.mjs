
let input = (process.argv.slice(2));

let a = input[0];
let b = input[1];

abbreviation(a, b);

function hasUpperCase(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).toUpperCase() === str.charAt(i)) {
      return true;
    }
    return false;
  }
}

function abbreviation(a, b) {
  let arr = [];


  //Creates an array of nested boolean values reflecting the 1.) the number of
  //characters in the string + 1, and b.) whether or not the first character is
  //capitalized and if so, the first value in the second array is set to false
  for(let i = 0; i <= a.length; i++) {
    arr[i] = [];
    arr[i][0] = !hasUpperCase(a.substr(0, i));
  }
  console.log(arr);

  // Iterates through and adds a false boolean to the first array value within
  // the matrix so it reads 'true' instead of 'false'
  for (let i = 0; i <= b.length; i++) {
    arr[0][i] = false;
    //console.log(arr)
  }
  arr[0][0] = true;
  console.log(arr);

  for(let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      let temp = false;

      // If the the character at hand in the first (a) string equals a
      // character in the second (b) string then the second to last array value
      // in the second to last array will be the temp value
      if(a.charAt(i - 1) === b.charAt(j - 1)) {
        temp = arr[i - 1][j - 1];
        console.log(`Both strings are identical. temp = ${temp}`);
      }
      // If temp is not true and the uppercase version of the character at hand
      // equals the b string character at hand, then the temporary value equals
      // the first value from the penultimate array
      if (temp !== true && a.charAt(i - 1).toUpperCase() === b.charAt(j - 1)) {
        console.log('The a character and the b character are equal after the a character has been capitalized.');
        temp = arr[i - 1][j - 1]; //The iterated element will move diagonally if the iterated a-character equals the iterated b-character
      }
      // Otherwise if the temporary value does not equal true and the character
      // at hand (a) does not equal the character at hand of b then the temporary value
      // is equal to the final value of the penultimate array
      if (temp !== true && a.charAt(i - 1).toUpperCase() !== a.charAt(i - 1)) {
        console.log("the capitalized character from the a string does not equal the a-string value")
        temp = arr[i - 1][j]; //The iterated element is copied from the previous horizontal/vertical element if the uppercase version of the a-string does not equal the iterated version of the a-string
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
