function hello(name: string): string {
  return `Hello ${name} !`;
}

console.time('hello call');
hello('Romain');
console.timeEnd('hello call');

console.time('hello call');
hello('Romain');
console.timeEnd('hello call');

console.time('hello call');
hello('Romain');
console.timeEnd('hello call');

console.time('hello call');
hello('Romain');
console.timeEnd('hello call');
