import test from "ava";
import { compute } from "./index.js";

function macro(t, input, expected) {
  const computed = compute(input);
  t.is(computed, expected);
}

test("should write input value when no rule is applicable", macro, 1, "1");
test(
  "should write a specific word when the input value is divisible by a specific number",
  macro,
  9,
  "Foo",
);
test(
  "should write a specific word when a specific number is found in the input value",
  macro,
  13,
  "Foo",
);
