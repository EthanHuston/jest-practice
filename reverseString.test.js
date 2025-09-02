import { reverseString } from "./reverseString";

test("reverse a word", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverse a reversed word", () => {
  expect(reverseString("olleh")).toBe("hello");
});
