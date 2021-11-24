const { interval } = require('rxjs');
const { map, take } = require('rxjs/operators');

interval(1000)
  .pipe(
    map((v) => v * 2),
    take(3),
  )
  .subscribe((val) => console.log(val));

// Marble Graph
// ----0----1----2----3----4----5 ----6 --...
// map((v) => v * 2)
// ----0----2----4----6----8----10----12--...
// take(3)
// ----0----2----4|
