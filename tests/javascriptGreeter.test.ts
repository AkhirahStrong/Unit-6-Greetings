import { JavaScriptGreeter } from "../src/javascriptGreeter";

describe("JavaScriptGreeter Hello, John!", () => {
  test("should wrap the greeting ", () => {
    const greeter = new JavaScriptGreeter("Hello");
    const result = greeter.greet("John");

    expect(result).toEqual("console.log('Hello, John!')");
  });

  test("should wrap the greeting What up, Lisa!", () => {
    const greeter = new JavaScriptGreeter("What up");
    const result = greeter.greet("Lisa");

    expect(result).toEqual("console.log('What up, Lisa!')");
  });

  test("should wrap the greeting Hey there, Shaquetta!", () => {
    const greeter = new JavaScriptGreeter("Hey there");
    const result = greeter.greet("Shaquetta");

    expect(result).toEqual("console.log('Hey there, Shaquetta!')");
  });
});
