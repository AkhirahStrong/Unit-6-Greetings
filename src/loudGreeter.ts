import { Greeter } from "../src/greeter";

export class LoudGreeter extends Greeter {
  // Private property to keep track of extra exclamation points
  private extra: string = "!!";

  //Method
  /* the void type is used to indicate that a function 
  or method does not return a value. It is often used 
  when a function's purpose is to perform some action 
  or side effect without producing a result.*/
  addVolume(): void {
    // Add an additional exclamation point to extra
    this.extra += "!";
  }

  greet(name: string): string {
    // Invoke the parent class's greet method
    const greeting = super.greet(name);
    // Append extra exclamation points to the end of the greeting
    return `${greeting}${this.extra}`;
  }

  //not getting pushed to GH
}
