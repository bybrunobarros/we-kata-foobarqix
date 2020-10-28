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
  { input: 3, expected: "FooFoo" },
  { input: 4, expected: "4" },
  { input: 5, expected: "BarBar" },
  { input: 6, expected: "Foo" },
  { input: 7, expected: "QixQix" },
  { input: 8, expected: "8" },
  { input: 9, expected: "Foo" },
  { input: 10, expected: "Bar*" },
  { input: 13, expected: "Foo" },
  { input: 15, expected: "FooBarBar" },
  { input: 21, expected: "FooQix" },
  { input: 33, expected: "FooFooFoo" },
  { input: 51, expected: "FooBar" },
  { input: 53, expected: "BarFoo" },
  { input: 101, expected: "1*1" },
  { input: 105, expected: "FooBarQix*Bar" },
  { input: 303, expected: "FooFoo*Foo" },
  { input: 10101, expected: "FooQix**" },
].forEach(({ input, expected }) => test(macro, input, expected));
