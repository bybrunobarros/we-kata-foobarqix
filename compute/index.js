const TOKENS = [
  [0, "*"],
  [3, "Foo"],
  [5, "Bar"],
  [7, "Qix"],
];

const writeWordWhenDivisibleByNumber = (input) =>
  TOKENS.reduce((acc, [divisor, word]) => {
    if (input % divisor === 0) {
      acc = `${acc}${word}`;
    }
    return acc;
  }, "");

const replaceDigitsByWords = (input) =>
  input
    .toString()
    .split("")
    .map((digit) => {
      const token = TOKENS.find(([divisor]) => divisor.toString() === digit);
      return token ? token[1] : digit;
    })
    .join("");

const removeDigits = (prefix, suffix) => {
  let result = suffix;

  const words = [...TOKENS]
    .splice(1)
    .map(([, word]) => word)
    .join("|");
  const wordsRegExp = new RegExp(words, "g");

  if (prefix || wordsRegExp.test(suffix)) {
    result = suffix.replace(/\d/g, "");
  }

  return result;
};

export function compute(input) {
  const prefix = writeWordWhenDivisibleByNumber(input);

  let suffix = removeDigits(prefix, replaceDigitsByWords(input));

  return `${prefix}${suffix}`;
}
