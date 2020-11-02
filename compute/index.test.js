import test from "ava";
import { compute } from "./index.js";

function macro(t, input, expected) {
  const computed = compute(input);
  t.is(computed, expected);
}

test(
  "should return value when value is not divisible by 3, 5, or 7, and does not contain 3, 5, 7, or *",
  macro,
  1,
  "1",
);
test("should return Foo when value is only divisible by 3", macro, 9, "Foo");
test("should return Qix when value is only divisible by 7", macro, 49, "Qix");
test("should return Foo when only contains one 3", macro, 13, "Foo");
test("should return Qix when only contains one 7", macro, 17, "Qix");
test(
  "should return BarBar when value is divisible by 5 and contains one 5",
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
test("should return 1*1 when contains one 0", (t) => {
  const computed = compute(101);
  t.is(computed, "1*1");
});
test("should return Bar* when value is only divisible by 5, and contains one 0", (t) => {
  const computed = compute(10);
  t.is(computed, "Bar*");
});
test("should return FooQix** when value is divisible by 3 then 7, and contains two 0", (t) => {
  const computed = compute(10101);
  t.is(computed, "FooQix**");
});
