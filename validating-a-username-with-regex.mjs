
let input = process.argv.slice(2);

const validateUsr = (username) => /^[a-z0-9_]{4,16}$/g.test(username) 


console.log(validateUsr(input))
