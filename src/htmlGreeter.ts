import { Greeter } from "../src/greeter";

export class HtmlGreeter extends Greeter {
  private tagName: string;

  constructor(greeting: string, tagName: string = "h1") {
    super(greeting);
    this.tagName = tagName;
  }

  greet(name: string): string {
    const greeting = super.greet(name);

    return `<${this.tagName}>${greeting}</${this.tagName}>`;
  }
}
