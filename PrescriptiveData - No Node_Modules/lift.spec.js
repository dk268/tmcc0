const { expect } = require("chai");
const runLift = require("./lift.js");
const checkInputs = require("./checkInputs.js");
const fs = require("fs");

describe("The function analyzeLift takes arguments and puts out a file; these tests will test the return rather than the file put out.", () => {
  describe("The runLift function...", () => {
    xit("accepts up to four inputs, and will toss extras", () => {
      expect(lift(1, 2, 3, [4])).to.equal(undefined);
      expect(lift(1, 2, 3, ["fileName"], 9, "adam")).to.equal(undefined);
    });
  }); //end describe runLift
  describe("The inputs checker...", () => {
    let fileName = "./inputfiles/input1.txt";
    it("throws an error if neither its first nor fourth argument is an array", () => {
      expect(checkInputs.bind(null, 2, [44])).to.throw();
      expect(checkInputs.bind(null, 2, 3, 4, 5)).to.throw();
    });
    it("throws an error if the arguments are of the wrong type (number, number, number, array)", () => {
      expect(() => checkInputs("Somebody stop me!")).to.throw();
      expect(() => checkInputs("five", "twenty", "[44]")).to.throw();
    });
    it("throws an error if no member of its input array could be an integer", () => {
      expect(() => checkInputs(["twenty2", { type: `objective` }])).to.throw();
      expect(() =>
        checkInputs(["twenty2", { type: `objective` }, 22])
      ).to.throw();
    });
  }); //ends describe inputCheck

  describe("The outputs it makes...", async () => {
    /* */
    let fileName = "./inputfiles/input1.txt";

    xit("correctly calculates the time required for the first, simple case", () => {
      expect(runLift(fileName)).to.equal(12);
    }); //won't work because fs.readFile isn't promisified
  }); //ends describe output
}); //ends outermost describe
