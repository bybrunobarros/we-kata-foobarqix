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
  { input: 6, expected: "Foo" },
  { input: 10, expected: "Bar" },
].forEach(({ input, expected }) => test(macro, input, expected));
