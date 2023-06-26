import { Greeter } from "../src/greeter";

const greeterInstanceHello = new Greeter("Hello");
const greeterInstanceWhatup = new Greeter("What up");
const greeterInstanceHeyThere = new Greeter("Hey there");

describe("Greeter", () => {
  test("Should return Hello John!", () => {
    const name = "John";
    const result = greeterInstanceHello.greet(name);

    expect(result).toEqual("Hello, John!");
  });

  test("Should return What up Lisa!", () => {
    const name = "Lisa";
    const result = greeterInstanceWhatup.greet(name);

    expect(result).toEqual("What up, Lisa!");
  });

  test("Should return Hey there Shaquetta!", () => {
    const name = "Shaquetta";
    const result = greeterInstanceHeyThere.greet(name);

    expect(result).toEqual("Hey there, Shaquetta!");
  });
});
