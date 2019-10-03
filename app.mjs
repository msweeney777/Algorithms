
import * as method from './http-example.mjs';

let input = process.argv.slice(2);

let verb = input[0];
let url = input[1];


if(verb === 'get') {
  method.get(url);
} else if (verb === 'post') {
  method.post(url);
} else if (verb === 'put') {
  method.put(url)
} else if (verb === 'delete') {
  method.del(url);
} else {
  console.log('Unrecognized method. Try again.');
}


