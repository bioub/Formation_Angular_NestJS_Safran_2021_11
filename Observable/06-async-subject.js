const { interval, AsyncSubject, take } = require("rxjs");

const interval$ = interval(1000).pipe(take(1));

// AsyncSubject doit complete pour mettre 1 valeur en cache
const subject$ = new AsyncSubject();
interval$.subscribe(subject$);

subject$.subscribe((v) => {
  console.log('sub1', v)
});


setTimeout(() => {
  subject$.subscribe((v) => {
    console.log('sub2', v)
  });
}, 1500);

// inte$ ----0|

// sub1$ ^---0|
// sub2$         ^|
