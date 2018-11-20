const fs = require("fs");

const liftStream = filename => {
  let numElevs, numFloors, elevCap, queueRaw;
  let time = 0;
  const floors = {};
  let elevators = [];
  let buffer = [];
  const readableStream = fs.createReadStream(filename);
  readableStream.setEncoding("utf8");
  const writeableStream = fs.createWriteStream(`output.txt`);
  const errorStream = fs.createWriteStream(`eleverrors.txt`);
  readableStream.on("ready", chunk => {
    if (readableStream.bytesRead > 10) {
      [numElevs, numFloors, elevCap, queueRaw] = chunk.split(`\n`);
      for (let i = 0; i < elevators.length; i++) {
        elevators[i] = new Elevator(elevCap);
      }
    }
  });
  readableStream.on(`data`, chunk => {
    queueRaw = chunk;
    elevate(
      numElevs,
      numFloors,
      elevCap,
      queueRaw,
      errorStream,
      writeableStream,
      time,
      floors,
      buffer,
      elevators
    );
  });
  writeableStream.on("ready", chunk => {
    writeableStream.write("Welcome to the stream!");
  });
  readableStream.on("end", () => {
    for (key in floors) {
      writeableStream.write(`Floor ${key} was accessed ${floors[key]} times!`);
    }
  });
};

const elevate = (
  numElevs,
  numFloors,
  elevCap,
  queueRaw,
  errorStream,
  outputStream,
  time,
  floors,
  buffer,
  elevators
) => {
  let availableElevators = elevators.filter(elevator => elevator.ETA <= time);
  let currentCapacity = availableElevators.length * elevCap;
  const queue = queueRaw.split(",").map(num => num * 1);
  for (
    let i = 0;
    queue.length > 0 || availableElevators.length < numElevs;
    time++
  ) {
    if (time > 999999999) break; //infinite loop protection

    while (buffer.length <= currentCapacity && queue.length) {
      if (!Number.isInteger(queue[0]) || queue[0] > numFloors) {
        errorStream.write(`Queue ticket invalid; value ${queue.shift()}`);
        continue; //checks if an order goes to a floor higher than max floor
      } else {
        let floor = queue.shift() * 1;
        if (floors["" + floor]) floors["" + floor]++;
        else floor["" + floor] = 1;
        buffer.push(queue.shift() * 1);
      }
    }

    availableElevators.forEach(elevator => {
      //dispatches elevator when full or queue is empty
      if (buffer.length < elevCap) {
        elevator.dispatchElevator(buffer, time, outputStream);
        buffer = [];
      } else {
        elevator.dispatchElevator(buffer.slice(0, elevCap), time, outputStream);
        buffer = buffer.slice(elevCap);
      }
    });
    availableElevators = elevators.filter(elevator => {
      return elevator.ETA <= time;
    });
    currentCapacity = availableElevators.length * elevCap;
  }
  time--;
  outputStream.write(`All complete! Total time: ${time}!`);
  return time;
};

class Elevator {
  constructor(capacity) {
    this.capacity = capacity;
    this.ETA = 0;
    this.dispatchElevator = this.dispatchElevator.bind(this);
    this.elevatorNumber;
    Elevator.elevatorCounter();
  }
  dispatchElevator(queue, currentTime, outputStream) {
    if (queue.length) this.ETA = currentTime + Math.max(...queue) * 3;
    outputStream.write(
      `Dispatching elevator ${
        this.elevatorNumber
      } at time ${currentTime}, to return at ${this.ETA}!`
    );
  }
  static elevatorCounter() {
    this.elevatorNumber = ++Elevator.elevatorIndex;
  }
}

Elevator.elevatorIndex = 0; //intended as static variable to ID different elevators

liftStream("./inputfiles/input1.txt");
