import fs from 'fs';

let input = process.argv.slice(2);

 fs.readFile("example.json", (err, data) => {
   if (err) throw err;
   let info = JSON.parse(data);
   console.log(info);
 })
 console.log("test");
