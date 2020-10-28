import test from "ava";
import { compute } from "./index.js";

function macro(t, input, expected) {
  const computed = compute(input);
  t.is(computed, expected);
}
macro.title = (providedTitle, input, expected) =>
  `should return "${expected}" when input is ${input}`;

[
  { input: 1, expected: "1" },
  { input: 2, expected: "2" },
  { input: 4, expected: "4" },
  { input: 6, expected: "Foo" },
  { input: 8, expected: "8" },
  { input: 10, expected: "Bar" },
  { input: 21, expected: "FooQix" },
].forEach(({ input, expected }) => test(macro, input, expected));
