import { exportedFunction } from "./dependency";

export const functionThatCallsDependency = () => {
  exportedFunction();
};
