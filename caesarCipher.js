function caesarCipher(str, offset) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let res = [];
  for (const letter of str) {
    if (/[^\w\s]+/.test(letter) || letter === " ") {
      res.push(letter);
    } else {
      let index = alphabet.indexOf(letter.toLowerCase()) + offset;
      while (index > 25) index = index - 26;
      if (/[A-Z]/.test(letter)) {
        res.push(alphabet[index].toUpperCase());
      } else {
        res.push(alphabet[index]);
      }
    }
  }
  return res.join("");
}

export { caesarCipher };
