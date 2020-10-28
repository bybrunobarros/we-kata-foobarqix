export function compute(input) {
  const output = input % 3 === 0 ? "Foo" : "";

  return output || input.toString();
}
