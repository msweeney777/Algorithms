//This algorithm converts a traditional 12-hour AM/PM formatted time and
//converts it into 'military' (24-hour) time.
//
//
//Parses an array of integers from the command line
let string = (process.argv.slice(2, 3)).pop();

timeConversion(string);

//The function splits the input string into three elements. The first element
//is manipulated depending on a.) whether it is AM or PM and whether or not the
//hour is '12'. If the time is PM and the hour is not '12', 12 is added to the
//given hour otherwise the time is left alone, albeit stripped of the 'PM'. The
//inverse goes for AM. If the hour is 12, then the 12 is subtracted from the
//hour - in other words, '12' becomes '00'. Otherwise an time with 'AM' affixed
//to the end is left as is and the 'AM' is stripped from it.
function timeConversion(s) {
  s = s.split(':');
  if(s[0] !== '12' && s[2].includes('PM')) {
    s[0] = parseInt(s[0], 10) + 12;
  } else if (s[0] === '12' && s[2].includes('AM')) {
    s[0] = '00';
  }
  s[2] = s[2].split('').slice(0,2).join('');
  s = s.join(':');
  console.log(s);
  return s;
}
