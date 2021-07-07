import { functionThatCallsDependency } from "./function-that-calls-dependency";

const sayHello = jest.fn(() => "hello!");

jest.mock("./dependency", () => ({
  exportedFunction: () => {
    console.log(`the string I'm going to print is ${sayHello()}`);
  },
}));

describe("runs the test", () => {
  it("prints to the console", () => {
    functionThatCallsDependency();
  });
});
