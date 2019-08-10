// This problem is a variation on the Fibonacci sequence ... and takes a
// signature of the first three, instead of first two terms and prints out a
// list of n terms
let sig = process.argv.slice(2, 5);
sig = sig.map(x => +x);

let num = process.argv.slice(5).pop();

tribonacci(sig, num);



function tribonacci(signature, n) {
  let trib = signature;
  for (let i = 3; i < n; i++) {
    trib.push((trib[i - 1] + trib[i - 2] + trib[i - 3]));
  }
  console.log(trib.slice(0, n));
}
