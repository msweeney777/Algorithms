// This function sorts only odd numbers in an array leaving even numbers or
// zeros in place
let input = process.argv.slice(2);

sortArray(input);

function sortArray(array) {

  //Set up a helper array and feed it with all the odd numbers filtered from
  //the original and sorted in ascending order
  let oddArray = array.filter(x => x % 2).sort((a, b) => a - b);
  console.log(oddArray);

  //Using the map function, any odd numbers are replaced with the first
  //integer-element in the helper function
  array = array.map(x => x % 2 ? oddArray.shift() : x)
  console.log(array);


}
