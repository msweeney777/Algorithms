//This algorithm entails rounding scores that are over the value of 38. If the
//difference between the grade and the next multiple of 5 is less than 3, round
//the grade up to the next multiple of 5. If the value of the grade is less
//than 38, no rounding occurs as the result will still be a failing grade.
let scores = (process.argv.slice(2));
let arr = [];

//converts the entire array of scores into integers
for(let i = 0; i < scores.length; i++) {
  scores[i] = +scores[i];
}

gradingStudents(scores);

gradingAlternative(scores);

function gradingStudents(grades) {
  let temp;
  let arr = [];
  for(let i = 0; i < grades.length; i++){
    temp = Math.ceil(grades[i]/5)*5;
    if(grades[i] >= 38 && grades[i] % 5 > 2) {
      arr[i] = temp;
    } else {
      arr[i] = grades[i];
    }
  }
  console.log(arr);
  return arr;
}

//An alternative solution using ternerary logic
function gradingAlternative(grades) {
  let arr = [];
  for(let i = 0; i < grades.length; i++) {
    //The condition ? if the condition is true : otherwise if the condition is
    //false; 
    console.log(grades[i] >= 38 && grades[i] % 5 > 2 ? grades[i] + (5 - (grades[i] % 5)) : grades[i]);
  }
}
