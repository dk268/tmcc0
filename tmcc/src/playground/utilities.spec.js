/* global describe, test */

const { validateInput, executeOperation, parseLonger } = require("./utilities");

// describe("The utilities used by this application", () => {
//   describe("include input validations", () => {
//     describe("has a $ detector", () => {
//       test("returns false if there is no $", () => {
//         expect(leadingDollarSign("")).toBe(false);
//         expect(leadingDollarSign(".")).toBe(false);
//         expect(leadingDollarSign("49279820")).toBe(false);
//       });
//       test("returns false if $ is not in the leading position", () => {
//         expect(leadingDollarSign(" $")).toBe(false);
//         expect(leadingDollarSign("874687$")).toBe(false);
//         expect(leadingDollarSign("00")).toBe(false);
//       });
//       test("returns true if $ is in the leading position", () => {
//         expect(leadingDollarSign("$TESTYSTRING")).toBe(true);
//       });
//     });
//   });
// });

describe("Utilities with regard to postfix calculator", () => {
  describe("input validators", () => {
    test("which identifies a correct string", () => {
      expect(validateInput("4.23 7 +")).toBe(true);
    });

    test("which identifies a non-number input in the first two slots", () => {
      expect(validateInput("{shouldWork:false } +")).toBe("not numbers");
    });
  });

  describe("the executor", () => {
    test("correctly adds a properly formatted input string for addition", () => {
      expect(executeOperation("111 222 +")).toEqual(333);
      expect(executeOperation("-1 -2 +")).toEqual(-3);
    });
    test("correctly adds a properly formatted input string for subtraction", () => {
      expect(executeOperation("222 222 -")).toEqual(0);
      expect(executeOperation("222 220 -")).toEqual(2);
      expect(executeOperation("222 333 -")).toEqual(-111);
      expect(executeOperation("-1 -2 -")).toEqual(1);
    });
    test("correctly adds a properly formatted input string for multiplication", () => {
      expect(executeOperation("4 2 *")).toEqual(8);
      expect(executeOperation("-1 4 *")).toEqual(-4);
      expect(executeOperation("0 5756 *")).toEqual(0);
    });
    test("correctly adds a properly formatted input string for division", () => {
      expect(executeOperation("111 222 /")).toEqual(0.5);
      expect(executeOperation("-2 -1 /")).toEqual(2);
      expect(executeOperation("400 0 /")).toEqual(Infinity);
    });
    test("correctly does longer inputs", () => {
      expect(parseLonger("3 3 + 3 3 * -")).toBe(-3);
      expect(parseLonger("3 3 + 3 3 * - 3 3 + 3 3 * -")).toBe(-3);
    });
  });
});
