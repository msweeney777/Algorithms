
let input = process.argv.slice(2).pop();

validParentheses(input);

function validParentheses (parens) {

  let indent = 0;
  
  for( let i = 0; i < parens.length && indent >= 0; i++) {
    indent += (parens[i] == '(')? 1 : -1;
    console.log(indent, parens[i]);
  }
  console.log(indent == 0);
  return indent == 0;
}

