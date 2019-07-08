
let input = (process.argv.slice(2));

let a = input[0];
let b = input[1];

abbreviation(a, b);

function abbreviation(a, b) {
  //Declare our array
  let arr = [];

  //Add our first column of our matrix represented as a series of arrays with
  //an initial value of true;
  for(let i = 0; i <= a.length; i++)  {
    arr[i] = [];
    arr[i][0] = true;
  }

  // Now  we add our first complete row this time hard-coded as a series of false
  // boolean elements with the first column value re-coded as 'true'
  for(let j = 0; j <= b.length; j++) {
    arr[0][j] = false;
  }
  arr[0][0] = true;

  //Finally we iterate through two if-statements to check for possible
  //matches.
  for(let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      //Our value is automatically pre-set as false in-case either of the two
      //if-statements are not triggered.
      let value = false;
      //If the given character in the a-string is equal with the given
      //character in the b-string, the current value will be equal to the value
      //diagonal in the upper-left hand corner
      if(a.charAt(i - 1).toUpperCase() === b.charAt(j - 1)) {
        value = arr[i - 1][j - 1];
      //Otherwise, if the value at hand is not capitalized and does not match a
        //b-string value, the current value will be drawn from the previous
        //value in the same column
      } else if (value !== true && a.charAt(i - 1).toUpperCase() !== a.charAt(i - 1)) {
        value = arr[i - 1][j];
      }
      //Having run through the above two if-statements, the current value is
      //then added to the matrix
      arr[i][j] = value;
    }
  }
  //Finally an if-statement checks to determine if the final value in the
  //matrix is true - if so, return true, otherwise, false
  console.log(arr);
  if(arr[a.length][b.length]) {
    console.log('YES');
    return 'YES';
  }
  console.log('NO');
  return 'NO';
}

