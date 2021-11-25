// function timeout(delayMs) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// timeout(1000).then(() => console.log('1s'));

// function interval(delayMs) {
//   return new Promise((resolve, reject) => {
//     setInterval(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// interval(1000).then(() => console.log('1s'));

const { Observable } = require('rxjs');

// function interval(delayMs) {
//   return new Observable((observer) => {
//     setInterval(() => {
//       observer.next();
//     }, delayMs);
//   });
// }

// interval(1000).subscribe({
//   next: () => console.log('1s'),
//   error: (err) => {},
//   complete: () => {}
// });


function countdown(delayMs, startValue = 10) {
  let currentValue = startValue;
  return new Observable((observer) => {
    const intervalId = setInterval(() => {
      observer.next(currentValue);
      if (currentValue <= 0) {
        observer.complete();
      } else {
        currentValue--;
      }
    }, delayMs);
    return () => {
      clearInterval(intervalId);
    }
  });
}

countdown(1000).subscribe({
  next: (val) => console.log(val),
  complete: () => console.log('DONE'),
});
