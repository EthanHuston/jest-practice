import { capitalize } from "./capitalize";

test("capitalizes one letter", () => {
  expect(capitalize("a")).toBe("A");
});

test("capitalizes a word", () => {
  expect(capitalize("jest")).toBe("Jest");
});

test("letter is already capitalized", () => {
  expect(capitalize("B")).toBe("B");
});

test("Capitalize a sentence", () => {
  expect(capitalize("the quick brown fox jumps over the lazy do")).toBe(
    "The quick brown fox jumps over the lazy do"
  );
});
