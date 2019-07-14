//This algorithm entails finding the amount of apples and oranges that fall
//within the bounds of s and t, coordinates marking the two extremes of a
//house and prints out the amount of each fruit that falls within the confines
//of s and t respectively.

//Read the inputs from the command line
let input = process.argv.slice(2);

//Iterate through the array turning each string element into an integer
for (let i = 0; i < input.length; i++) {
  input[i] = +input[i];
}

//Assign the input elements to a respective variable
let s = input[0];

let t = input[1];

let a = input[2];

let b = input[3];

let m = input[4];

let n = input[5];

//Assign m number of apple elements to an appropriately sized array
let mtotal = m + 6;
let apples = input.slice(6, mtotal);

//Assign n number of orange elements to an array
let ntotal = mtotal + n;
let oranges = input.slice(mtotal, ntotal);


countApplesAndOranges(s, t, a, b, apples, oranges);

function countApplesAndOranges(s, t, a, b, apples, oranges) {

  let appleCount = 0;
  let orangeCount = 0;


  //Calculate the number of apples that fall between s and t
  //for(let i =0; i < m; i++) {
  //  let apple = a + apples[i];
  //  if(apple >= s && apple <= t)  {
  //    appleCount++
  //  }
  //}
  
  apples.forEach(function(apple) {
    if(apple + a >= s && apple + a <= t)  {
      appleCount++
    }
  })

  //Calculate the number of oranges that fall between s and t
  for(let i =0; i < n; i++) {
    let orange = b + oranges[i];
    if(orange >= s && orange <= t)  {
      orangeCount++;
    }
  }
  console.log(appleCount);
  console.log(orangeCount);
}
