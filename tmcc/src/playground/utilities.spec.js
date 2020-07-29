/* global describe, test */

const { validateInput, executeOperation } = require("./utilities");

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
    test("correctly adds a properly formatted input string", () => {
      expect(executeOperation("111 222 +")).toEqual(333);
    });
  });
});
