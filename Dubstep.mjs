// Takes a string and removes all instances of the string group 'WUB' ensuring
// that there is a single space ' ' between the remaining 'song'.
let input = process.argv.slice(2).pop();

songDecoder(input);
alternativeDecoder(input);

//
function songDecoder(song) {
  //Tests for instances of 'WUB' in the string;
  let regex = /WUB/;
  let found = regex.test(song);
  
  //While instance(s) of 'WUB' still exist in the string, replace with a
  //space. Any additional spaces between remaining characters should be replaced with a single space
  //inbetween characters.

  while(found) {
    song = song.replace('WUB', " ").trim();
    song = song.replace(/\s+/g, ' ');
    found = regex.test(song);
  }


  console.log(song);
}

function alternativeDecoder(song) {
  song = song.replace(/(WUB)+/g, " ").trim();
  console.log(song);
}
