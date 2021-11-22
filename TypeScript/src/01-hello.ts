import { hello } from "./01-functions.js";

const names = ['Jean', 'Eric'];
names.push('Paul');

for (const n of names) {
  console.log(hello(n));
}
