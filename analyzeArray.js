function analyzeArray(arr) {
  let res = {
    average:
      arr.reduce((accumulator, current) => accumulator + current, 0) /
      arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
  return res;
}

export { analyzeArray };
