import { HtmlGreeter } from "../src/htmlGreeter";

describe("HtmlGreeter", () => {
  test("Test greet method with 'Hello' greeting, 'John' name, and 'h1' tagName", () => {
    const greeter = new HtmlGreeter("Hello", "h1");
    expect(greeter.greet("John")).toEqual("<h1>Hello, John!</h1>");
  });

  test("Test greet method with 'Hi' greeting, 'John' name, and 'h2' tagName", () => {
    const greeter = new HtmlGreeter("Hi", "h2");
    expect(greeter.greet("John")).toEqual("<h2>Hi, John!</h2>");
  });

  test("Test greet method with 'What's up' greeting, 'John' name, and default 'h1' tagName", () => {
    const greeter = new HtmlGreeter("What's up");
    expect(greeter.greet("John")).toEqual("<h1>What's up, John!</h1>");
  });
});
