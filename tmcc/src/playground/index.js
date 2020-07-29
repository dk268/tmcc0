const readline = require("readline");
const chalk = require("chalk");
const { validateInput, executeOperation } = require("./utilities");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = rl.question("What's your input? ", input => {
  const isValid = validateInput(input);
  if (isValid !== true) {
    console.log(isValid);
    return false;
  } else {
    console.log(executeOperation(input));
  }
  process.exit(0);
});

const addOne = num => num + 1;

console.log(addOne(4));

module.exports = { addOne };
