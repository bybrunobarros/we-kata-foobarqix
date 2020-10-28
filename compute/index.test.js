import test from "ava";
import { compute } from "./index.js";

test(`should return "1" when input is 1`, (t) => {
  const computed = compute(1);
  t.is(computed, "1");
});
test(`should return "Foo" when input is 6`, (t) => {
  const computed = compute(6);
  t.is(computed, "Foo");
});
