import { Greeter } from "../src/greeter";

export class LoudGreeter extends Greeter {
  // Private property to keep track of extra exclamation points
  private extra: string = "!";
  private remove: string = "!";

  //Method
  /* the void type is used to indicate that a function 
  or method does not return a value. It is often used 
  when a function's purpose is to perform some action 
  or side effect without producing a result.*/
  addVolume(): void {
    // Add an additional exclamation point to extra
    this.extra += "!";
  }

  // Method to remove an exclamation mark from extra
  removeVolume(): void {
    // Check if extra has at least one exclamation mark
    if (this.extra.length > 2) {
      // Remove the last exclamation mark
      this.extra = this.extra.slice(0, -1);
    }
  }

  greet(name: string): string {
    // Use the parent class's greet method
    const greeting = super.greet(name);

    // Add extra exclamation points to
    //the end of the greeting
    return `${greeting}${this.extra}`;
  }
}
