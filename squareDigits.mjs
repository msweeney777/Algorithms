let input = process.argv.slice(2).pop();

input = parseInt(input, 10);

squareDigits(input);

function squareDigits(num) {
  //num = num.toString().split('');
  num = num.toString().split('');

  num = num.map((item) => {return item * item});
  num = num.join('');
  console.log(num);
  for(let i = 0; i < num.length; i++) {
    num[i] = +num[i];
    num[i] = Math.pow(num[i], 2);
  }
  num = num.join('');
  console.log(num);

}
