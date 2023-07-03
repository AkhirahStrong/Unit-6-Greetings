import { LoudGreeter } from "../src/loudGreeter";

describe("LoudGreeter", () => {
  test("Test without calling addVolume", () => {
    const notAddVolume = new LoudGreeter("Hello");
    expect(notAddVolume.greet("John")).toEqual("Hello, John!!");
  });

  test("Test with calling addVolume", () => {
    const addToVolume = new LoudGreeter("Hello");
    addToVolume.addVolume();
    expect(addToVolume.greet("John")).toEqual("Hello, John!!!");
  });

  test("Test with calling addVolume twice", () => {
    const addToVolume = new LoudGreeter("Hello");
    addToVolume.addVolume();
    addToVolume.addVolume();
    expect(addToVolume.greet("John")).toEqual("Hello, John!!!!");
  });

  test("Test with calling removeVolume", () => {
    const addToVolume = new LoudGreeter("Hello");
    addToVolume.removeVolume();
    expect(addToVolume.greet("John")).toEqual("Hello, John!!");
  });

  test("Test with calling removeVolume twice", () => {
    const addToVolume = new LoudGreeter("Hello");
    addToVolume.removeVolume();
    addToVolume.removeVolume();
    //The first remove valume will provide !! therefore, this
    //will not trigger the 2nd removeVolume
    expect(addToVolume.greet("John")).toEqual("Hello, John!!");
  });
});
