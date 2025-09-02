import { caesarCipher } from "./caesarCipher";

test("caesar cipher shift by 0", () => {
  expect(caesarCipher("abcd", 0)).toBe("abcd");
});

test("caesar cipher shift by 1", () => {
  expect(caesarCipher("abcd", 1)).toBe("bcde");
});
test("caesar cipher shift by 1 with capital letters", () => {
  expect(caesarCipher("aBcD", 1)).toBe("bCdE");
});
test("caesar cipher shift by 3 and wrap", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("caesar cipher shift by 55 and wrap", () => {
  expect(caesarCipher("xyz", 55)).toBe("abc");
});
test("caesar cipher with punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
