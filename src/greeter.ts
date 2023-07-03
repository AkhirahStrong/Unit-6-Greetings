export class Greeter {
  greeting: string;

  constructor(greeting: string) {
    this.greeting = greeting;
  }
  /* @param name - The name to be included 
  in the greeting.*/
  greet(name: string): string {
    /*@returns The composed greeting in 
    the format "{greeting}, {name}!*/
    return `${this.greeting}, ${name}!`;
  }
}
