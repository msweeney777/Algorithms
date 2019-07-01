
let input = (process.argv.slice(2));

let a = input[0];
let b = input[1];

abbreviation(a, b);

function hasUpperCase(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).toUpperCase() === str.charAt(i)) {
      return true;
    }
    return false;
  }
}

function abbreviation(a, b) {
  let arr = [];

  for(let i = 0; i <= a.length; i++) {
    arr[i] = [];
    arr[i][0] = !hasUpperCase(a.substr(0, i));
  }
  for (let i = 0; i <= b.length; i++) {
    arr[0][i] = false;
  }
  arr[0][0] = true;

  for(let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      let temp = false;
      if(a.charAt(i - 1) === b.charAt(j - 1)) {
        temp = arr[i - 1][j - 1];
      }

      if (temp !== true && a.charAt(i - 1).toUpperCase() === b.charAt(j - 1)) {
        temp = arr[i - 1][j - 1];
      }

      if (temp !== true && a.charAt(i - 1).toUpperCase() !== a.charAt(i - 1)) {
        temp = arr[i - 1][j];
      }
      arr[i][j] = temp;
    }
  }
  console.log(arr);
  if (arr[a.length][b.length]) {
    console.log('YES');
    return 'YES';
  }
  console.log('NO');
  return 'NO';
}
