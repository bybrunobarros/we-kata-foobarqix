import test from "ava";
import { compute } from "./index.js";

function macro(t, input, expected) {
  const computed = compute(input);
  t.is(computed, expected);
}

test(
  "should return value when value is not divisible by 3, 5, or 7 and 3, 5, 7, or * are not found",
  macro,
  1,
  "1",
);
test("should return Foo when value is only divisible by 3", macro, 9, "Foo");
test("should return Qix when value is only divisible by 7", macro, 49, "Qix");
test("should return Foo when 3 only is found", macro, 13, "Foo");
test("should return Qix when 7 only is found", macro, 17, "Qix");
test(
  "should return BarBar when value is only divisible by 5 and 5 is found",
  macro,
  5,
  "BarBar",
);
test(
  "should return FooBarBar when value is divisible by 3 and 5 and 5 is found",
  macro,
  15,
  "FooBarBar",
);
test("should return 1*1 when 0 only is found", (t) => {
  const computed = compute(101);
  t.is(computed, "1*1");
});
test("should return Bar* when value is only divisible by 5 and 0 is found", (t) => {
  const computed = compute(10);
  t.is(computed, "Bar*");
});
test("should return FooQix** when value is divisible by 3 and 7 and 0 is found", (t) => {
  const computed = compute(10101);
  t.is(computed, "FooQix**");
});
