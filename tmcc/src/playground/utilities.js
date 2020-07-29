// const leadingDollarSign = input => !!input.match(/^\$/);

// const validateDecimal = input => {
//   if (typeof input !== "string") return false;

//   if (!input.includes(".")) return true;
//   else return input.split(".").length === 2 && input.match(/\.\d\d$/);
// };

// module.exports = { leadingDollarSign, validateDecimal };

const operators = ["+"];

const validateInput = input => {
  const trimmedInput = input.trim();

  const inputArray = trimmedInput.split(" ");

  for (let i = 0; i < 2; i++) {
    console.log(inputArray[i] * 1);

    if (isNaN(inputArray[i] * 1)) return "not numbers";
  }

  if (!operators.includes(inputArray[2])) return "invalid operator";

  return true;
};

function add(n1, n2) {
  return n1 + n2;
}

const operatorMap = {
  "+": add,
};

const parseInput = input => {
  const splitArray = input.trim().split(" ");

  return [[splitArray[0], splitArray[1]].map(Number), splitArray[2]];
};

const executeOperation = input => {
  const [operands, operator] = parseInput(input);

  return operatorMap[operator](...operands);
};

module.exports = { validateInput, executeOperation };
