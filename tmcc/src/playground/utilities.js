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

  if (inputArray[2] === "/" && inputArray[1] === "0")
    return "you are dividing by zero; stop it";

  return true;
};

function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

const operatorMap = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
};

const parseInput = input => {
  const splitArray = input.trim().split(" ");

  if (splitArray.length > 3) return parseLonger(input);

  return [[splitArray[0], splitArray[1]].map(Number), splitArray[2]];
};

const executeOperation = input => {
  const [operands, operator] = parseInput(input);

  return operatorMap[operator](...operands);
};

const parseLonger = input => {
  const splitArray = input.trim().split(" ");

  // 3 3 + 3 3 * -

  // const operands = splitArray.filter(token => !isNaN(token * 1));

  function add(n1, n2) {
    return n1 + n2;
  }

  function subtract(n1, n2) {
    return n1 - n2;
  }

  function multiply(n1, n2) {
    return n1 * n2;
  }

  function divide(n1, n2) {
    return n1 / n2;
  }

  const operatorMap = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
  };

  // const parseInput = input => {
  //   const splitArray = input.trim().split(" ");

  //   if (splitArray.length > 3) return parseLonger(input);

  //   return [[splitArray[0], splitArray[1]].map(Number), splitArray[2]];
  // };

  // const executeOperation = input => {
  //   const [operands, operator] = parseInput(input);

  //   return operatorMap[operator](...operands);
  // };

  const operators = splitArray.filter(token => !!operatorMap[token]);

  for (let i = 0; i < splitArray.length; i++) {
    const current = splitArray[i];
    console.log(splitArray);
    if (operatorMap[current]) {
      splitArray.splice(
        i - 2,
        3,
        operatorMap[current](splitArray[i - 2] * 1, splitArray[i - 1] * 1)
      );
      operators.shift();
      if (operators.length) i = 0;
    }
  }

  return splitArray[0];
};

module.exports = { validateInput, executeOperation, parseLonger };
