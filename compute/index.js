export function compute(input) {
  const TOKENS = [
    [3, "Foo"],
    [5, "Bar"],
    [7, "Qix"],
  ];

  const prefix = TOKENS.reduce((acc, [divisor, word]) => {
    if (input % divisor === 0) {
      acc = `${acc}${word}`;
    }
    return acc;
  }, "");

  let suffix = input
    .toString()
    .split("")
    .map((char) => {
      const token = TOKENS.find(([divisor]) => divisor.toString() === char);
      return token ? token[1] : "";
    })
    .join("");

  return `${prefix}${suffix}` || input.toString();
}
