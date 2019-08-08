//This algorithm determines parses a string for individual characters and
//counts them. If there are none to be found, then it returns an empty array.

let input = process.argv.slice(2).pop();

//count(input);
count2(input);

function count(string) {
  let obj = {};
  let character, count;
  if(string === undefined) {
    return {};
  } else {
    for(let i = 0; i < string.length; i++) {
      character = string.charAt(i);
      count = obj[character];

      obj[character] = count ? count + 1 : 1;
      
    }
    console.log(obj);

  }

}

// In this iteration, the input string is split and parsed for each
// individual character. If the character has not already been added into an
// the count object, it will do so and be assigned a value of 1; if it already
// exists, it will be incremented by one.
function count2(string) {
  let count = {}; 
  string.split('').forEach(x => count[x] ? count[x]++ : count[x] = 1);

  console.log(count);
  return count;
}
