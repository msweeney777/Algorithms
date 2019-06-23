//This algorithm entails printing a right aligned staircase of '#'s.
//
//Parse the number of steps
let num = (process.argv.slice(2)).pop();

num = parseInt(num, 10);

//Call the function itself
stairCase(num);

// Uses a while loop to append n - 1 spaces in addition to i '#'s to create a
// right aligned pyramid
function stairCase(n) {
  let string = "";
  let i = 1;
  while(n > 0) {
    string = ' '.repeat(n - 1) + '#'.repeat(i++); 
    console.log(string);
    n--;
  }
}
