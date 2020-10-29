import { compute } from "./compute/index.js";

let input = process.argv.slice(2);
input = input.length > 0 ? input[0] : 0;
console.log(compute(input));
