// Takes the first two terms in a fibonacci series and computes an array of n
// terms from the beginning

let input = (process.argv.slice(2));

input = input.map(x => Number(x));

let arr = [];

arr[0] = input[0];
arr[1] = input[1];
let n = input[2];

for(let i = 2; i < n; i++) {
  arr.push((arr[i - 1] + arr[i - 2]));
}

//let number = arr[arr.length - 1];
console.log(arr);

//let number = new BigNumber(number);
//console.log(number.toString().toFixed());
//console.log(arr[arr.length - 1]);
