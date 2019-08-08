 
let input = process.argv.slice(2);

humanReadable(input)

function humanReadable(seconds) {
  //let numSeconds = Math.floor(((seconds % 31536000) % 86400) % 3600) % 60;

  //let numMinutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
  let numMinutes = Math.floor((seconds % 3600) / 60);
  let numSeconds = seconds % 60;
  //let numHours = Math.floor(((seconds % 31536000) % 86400) / 3600) 
  let numHours = Math.floor(seconds / 3600);


  let minutes;
  let hours;


  if( numSeconds < 10) {
    seconds = `0${numSeconds}`;
  } else {
    seconds = numSeconds;
  }

  if( numMinutes < 10) {
    minutes = `0${numMinutes}`;
  } else {
    minutes = numMinutes;
  }

  if( numHours < 10) {
    hours = `0${numHours}`;
  } else {
    hours = numHours;
  }
  console.log(hours + ':' + minutes + ':' + seconds);
}
