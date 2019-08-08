
let input = process.argv.slice(2).pop();

parseMolecule(input);

function parseMolecule(formula) {
  let count = {};
  //formula = formula.split('').forEach(x => count[x] ? count[x]++ : count[x] = 1)
  //formula = formula.split()

  //formula = formula.split(/(?=[A-Z])([^\]]|\[\])+/);
  
  let _parts = [];  
  let matches;

  formula = formula.replace(/[{(]/g, "[").replace(/[})]/g, "]");

  stack.push({
    formula: "",
    molecules: []
  });


  console.log(formula);
}
