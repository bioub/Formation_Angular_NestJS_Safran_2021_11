const { interval, BehaviorSubject, take, ReplaySubject } = require("rxjs");

const interval$ = interval(1000).pipe(take(1));

// BehaviorSubject ne doit pas complete et met une valeur
// en cache, m'oblige à une valeur initiale
const subject$ = new ReplaySubject(3);
interval$.subscribe(subject$);

subject$.subscribe((v) => {
  console.log('sub1', v)
});


setTimeout(() => {
  subject$.subscribe((v) => {
    console.log('sub2', v)
  });
}, 3500);

// inte$ ----0|

// sub1$ ^---0|
// sub2$         ^|
