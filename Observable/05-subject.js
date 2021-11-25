const { interval, Subject, take } = require("rxjs");

const interval$ = interval(1000).pipe(take(1));

const subject$ = new Subject();
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
