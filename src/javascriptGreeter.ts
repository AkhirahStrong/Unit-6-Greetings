import { Greeter } from "./greeter";

export class JavaScriptGreeter extends Greeter {
  greet(name: string): string {
    //super is a keyword that calls the parent class
    const greeting = super.greet(name);

    // Wrap the greeting in a console.log statement
    return `console.log('${greeting}')`;
  }
}
