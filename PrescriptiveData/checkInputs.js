const checkInputs = (...args) => {
  if (args.length === 1) {
    if (!Array.isArray(args[0])) {
      throw new Error(
        "If there is a single argument, it must be a filename that resolves into an array."
      );
    } else if (args[0].every(element => !Number.isInteger(element * 1))) {
      throw new Error("Target input array has no valid inputs.");
    } else checkInputs(...args[0]);
  } else {
    if (args.length < 4) {
      throw new Error(
        "Input must have 1 argument, the queue; or four arguments, M, N, Q, and the queue. Any additional arguments will be discarded."
      );
    }
    if (args.slice(0, 3).some(element => !Number.isInteger(element * 1))) {
      throw new Error("The first three arguments must be integers.");
    }
    if (!Array.isArray(args[3].split(","))) {
      throw new Error(
        "In the case of four arguments, the fourth must be a filename that resolves into an array of valid inputs."
      );
    }
    if (args[3].split(",").every(element => !Number.isInteger(element * 1))) {
      throw new Error("Target input array has no valid inputs.");
    }
  }
};

module.exports = checkInputs;
