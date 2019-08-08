
let input = process.argv.slice(2);
let a = input[0];
let b = input[1];

add(a, b);

function add(str1, str2) {
  //let sum = BigInt(a) + BigInt(b);
  //sum = Number(sum);
  //console.log(sum);
  //return sum;
  
  let sum = "";

  let str1Length = str1.length;

  let str2Length = str2.length;


  if(str2Length > str1Length) {
    let temp = str2;
    str2 = str1;
    str1 = temp;
  }

  let carry = 0; // number that is carried to next decimal place, initially zero
  let a;
  let b;
  let temp;
  let digitSum;

  for(let i = 0; i < str1.length; i++) {
    a = parseInt(str1.charAt(str1.length - 1 - i)) //ith digit of str1 from right, we store it in a
    b = parseInt(str2.charAt(str2.length - 1 - i)) //ith digit of str2 from right, we store it in b
    b = (b) ? b : 0;                              // make sure b is a number, (in case str2 is shorter than str1)
    temp = (carry + a + b).toString();            // add a and b along with carry, store it in a temp string
    digitSum = temp.charAt(temp.length - 1);      //
    carry = parseInt(temp.substr(0, temp.length - 1)); //split the string into carry and digitSum (least significant digits of abSum)
    carry = (carry) ? carry : 0;                       //if carry is not number, make it zero 

    sum = (i === a.length - 1) ? temp + sum : digitSum + sum; // append digitSum to 'sum', If we reach leftmost digit, append abSum which includes carry too
  }

  console.log(sum);
  return sum; // return sum
}
