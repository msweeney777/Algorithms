let BigNumber = require('bignumber.js');

BigNumber.congfig({EXPONENTIAL_AT: 1e+9 })

BigNumber.config({ POW_PRECISION: 0 })

let input = (process.argv.slice(2));

//input = input.map(x => Number(x));

let arr = [];

arr[0] = input[0];
arr[1] = input[1];
let n = input[2];

for(let i = 2; i < n; i++) {
  arr[i] = +arr[i - 2] + Math.pow(arr[i-1], 2);
}

let number = arr[arr.length - 1];
//console.log(number);

//let number = new BigNumber(number);
//console.log(number.toString().toFixed());
//console.log(arr[arr.length - 1]);
