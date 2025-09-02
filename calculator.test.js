import { Calculator } from "./calculator";

//Add Tests
test("adds two positive numbers", () => {
  expect(new Calculator().add(1, 1)).toBe(2);
});
test("adds two negative numbers", () => {
  expect(new Calculator().add(-1, -2)).toBe(-3);
});
test("adds one positive and one negative number", () => {
  expect(new Calculator().add(-1, 2)).toBe(1);
});

//Subtract Tests
test("subtracts two positive numbers", () => {
  expect(new Calculator().subtract(1, 1)).toBe(0);
});
test("subtracts two negative numbers", () => {
  expect(new Calculator().subtract(-5, -13)).toBe(8);
});
test("subtracts one negative number and one positive number", () => {
  expect(new Calculator().subtract(5, -13)).toBe(18);
});

//Multiply Tests
test("multiplies two positive numbers", () => {
  expect(new Calculator().multiply(2, 2)).toBe(4);
});
test("multiplies two negative numbers", () => {
  expect(new Calculator().multiply(-2, -4)).toBe(8);
});
test("multiplies one positive number and one negative number", () => {
  expect(new Calculator().multiply(2, -12)).toBe(-24);
});
test("multiplies a negative number by 0", () => {
  expect(new Calculator().multiply(0, -12)).toBe(0);
});
test("multiplies a positive number by 0", () => {
  expect(new Calculator().multiply(0, 45)).toBe(0);
});

//Division tests
test("Division leading to whole number", () => {
  expect(new Calculator().divide(4, 2)).toBe(2);
});
test("Division leading to decimal", () => {
  expect(new Calculator().divide(1, 2)).toBeCloseTo(0.5);
});
test("Division leading to negative whole number", () => {
  expect(new Calculator().divide(14, -2)).toBeCloseTo(-7);
});
test("Division leading to negative decimal", () => {
  expect(new Calculator().divide(-3, 6)).toBeCloseTo(-0.5);
});
test("Divide by 0, throws an error", () => {
  expect(() => new Calculator().divide(56, 0)).toThrow();
});
test("Divide 0 by a number", () => {
  expect(new Calculator().divide(0, 6)).toBe(0);
});
