
let input = process.argv.slice(2).pop();

//DNAStrand(input);
alternativeApproach(input);

function DNAStrand(dna){
  let compStrand = "";
  for(let i = 0; i < dna.length; i++) {
    if(dna.charAt(i) === 'A') {
      compStrand += 'T';
    } else if(dna.charAt(i) === 'T') {
      compStrand += 'A';
    } else if(dna.charAt(i) === 'C') {
      compStrand += 'G';
    } else if(dna.charAt(i) === 'G') {
      compStrand += 'C';
    }
  }
  console.log(compStrand);
}

function alternativeApproach(dna) {
  let pairs = {A: 'T', T: 'A', C: 'G', G: 'C'};
  dna = dna.replace(/./g, c => pairs[c]);
  console.log(dna)
}
