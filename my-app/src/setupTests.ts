const originalConsoleError = console.error;

console.error = (...params) => {
  throw new Error(params[0]);
  originalConsoleError(...params);
};
