export function compute(input) {
  const TOKENS = [
    [3, "Foo"],
    [5, "Bar"],
    [7, "Qix"],
  ];

  const output = TOKENS.reduce((acc, [divisor, word]) => {
    if (input % divisor === 0) {
      acc = `${acc}${word}`;
    }
    return acc;
  }, "");

  return output || input.toString();
}
