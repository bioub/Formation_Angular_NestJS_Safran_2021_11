const { interval } = require('rxjs');
const { map, take } = require('rxjs/operators');

// interval(1000)
//   .pipe(
//     map((v) => v * 2),
//     take(3),
//   )
//   .subscribe((val) => console.log(val));

// Marble Graph
// ----0----1----2----3----4----5 ----6 --...
// map((v) => v * 2)
// ----0----2----4----6----8----10----12--...
// take(3)
// ----0----2----4|

function countdown(delayMs, startValue = 10) {
  return interval(delayMs).pipe(
    map((v) => startValue - v),
    take(startValue + 1)
  );
}

// Marble Graph
//   ----0 ----1----2----3----4----5 ----6 --...
// map((v) => startValue - v)
//   ----10----9----8----7

countdown(1000).subscribe((v) => console.log(v));
