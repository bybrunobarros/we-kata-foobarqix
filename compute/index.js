export function compute(input) {
  const TOKENS = [
    [0, "*"],
    [3, "Foo"],
    [5, "Bar"],
    [7, "Qix"],
  ];
  const words = [...TOKENS]
    .splice(1)
    .map(([, word]) => word)
    .join("|");
  const wordsRegExp = new RegExp(words, "g");

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
      return token ? token[1] : char;
    })
    .join("");

  if (prefix || wordsRegExp.test(suffix)) {
    suffix = suffix.replace(/\d/g, "");
  }

  return `${prefix}${suffix}` || input.toString();
}
