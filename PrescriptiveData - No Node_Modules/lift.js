const fs = require("fs");
const checkInputs = require("./checkInputs.js");
const { Writable } = require("stream");

const runLift = (...inputs) => {
  try {
    if (inputs.length === 1) {
      fs.readFile(inputs[0], "utf8", (err, data) => {
        try {
          return lift(data.split("\n"));
        } catch (e) {
          throw e;
        }
      });
    } else if (inputs.length > 3) {
      fs.readFile(inputs[3], "utf8", (err, data) => {
        try {
          return lift([...inputs.slice(0, 3), data.split("\n")[3]]);
        } catch (e) {
          throw e;
        }
      });
    } else {
      // checkInputs(inputs);
    }
  } catch (e) {
    console.log("Reached error state");
    throw e;
  }
};

// runLift(3, 99, 7, "./inputfiles/input1.txt");
runLift("./inputfiles/input1.txt");
// runLift("./inputfiles/input2.txt");
// runLift("./inputfiles/input3.txt");
// runLift("./inputfiles/input4.txt");
// runLift("./inputfiles/input5.txt");

const elevate = (numElevs, numFloors, elevCap, queueRaw) => {
  console.log(numElevs);
  console.log(queueRaw.split(",").length);
  const elevators = new Array(numElevs * 1);
  for (let i = 0; i < elevators.length; i++) {
    elevators[i] = new Elevator(elevCap, names[i] || `Elevator${i}`);
  }
  const messages = [];
  let buffer = [];
  let time = 0;
  let availableElevators = elevators.filter(elevator => elevator.ETA <= time);
  let currentCapacity = availableElevators.length * elevCap;
  const queue = queueRaw.split(",").map(num => num * 1);
  for (
    let i = 0;
    queue.length > 0 || availableElevators.length < numElevs;
    time++
  ) {
    if (time > 999999999) break;

    while (buffer.length <= currentCapacity && queue.length) {
      if (!Number.isInteger(queue[0]) || queue[0] > numFloors) {
        messages.push(`Queue ticket invalid; value ${queue.shift()}!`);
        continue;
      } else {
        buffer.push(queue.shift() * 1);
      }
    }

    availableElevators.forEach(elevator => {
      if (buffer.length < elevCap) {
        elevator.dispatchElevator(buffer, time, messages);
        buffer = [];
      } else {
        elevator.dispatchElevator(buffer.slice(0, elevCap), time, messages);
        buffer = buffer.slice(elevCap);
      }
    });
    availableElevators = elevators.filter(elevator => {
      // console.log(elevator.ETA, time);
      return elevator.ETA <= time;
    });
    currentCapacity = availableElevators.length * elevCap;
  }
  time--;
  messages.push(`Total time to completion is ${time}!`);
  fs.writeFile(`output.txt`, messages.join(`\n`), err => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
  return time;
};

class Elevator {
  constructor(capacity, name) {
    this.capacity = capacity;
    this.ETA = 0;
    this.elevatorNumber = 0;
    this.elevatorName = name;
    this.dispatchElevator = this.dispatchElevator.bind(this);
    Elevator.elevatorCounter();
  }
  dispatchElevator(queue, currentTime, messages) {
    if (queue.length) this.ETA = currentTime + Math.max(...queue) * 3;
    messages.push(
      `Ready to dispatch elevator ${this.elevatorName} at time ${currentTime}!`
    );
  }
  static elevatorCounter() {
    this.elevatorNumber = ++Elevator.elevatorIndex;
  }
}

Elevator.elevatorIndex = 0;

const lift = arr => {
  try {
    checkInputs(...arr);
    console.log("reached this here point");
    return elevate(...arr);
  } catch (e) {
    console.log("In lift error state!");
    throw e;
  }
};

module.exports = runLift;

const names = [
  `The Great Glass Elevator`,
  `Argo`,
  `Tortoise`,
  `Karnack`,
  `Pyrrhus`,
  `Philadelphia`,
  `SSE Manhattan`,
  `STS Minotuar`,
  `BC Viper`,
  `STS Enterprise`,
  `USS Valiant`,
  `Argonaut`,
  `Freedom`,
  `Deinonychus`,
  `Covenant`,
  `Avadora`,
  `BS Avalon`,
  `SC Liberator`,
  `LWSS Final Frontier`,
  `HWSS Avadora`,
  `SS Stalwart`,
  `Innuendo`,
  `Atlas`,
  `Raven`,
  `Hannibal`,
  `Big Daddy`,
  `SS Untouchable`,
  `HMS Blade`,
  `SC The Trident`,
  `SSE Verminus`,
  `BS The Diplomat`,
];
