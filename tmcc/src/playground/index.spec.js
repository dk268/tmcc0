/* global describe, it, test */

const { addOne } = require(".");

describe("This particular sample test suite", () => {
  test("does what it is supposed to", () => {
    expect(true).toEqual(true);
  });

  describe("the addOne function", () => {
    test("adds one to whatever", () => {
      expect(addOne(4)).toBe(5);
    });
  });
});
