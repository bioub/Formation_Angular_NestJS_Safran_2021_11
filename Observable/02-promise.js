// Callback Hell - Pyramid of doom
// fs.readFile('.prettierrc', (err, buffer) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.writeFile('.prettierrc.copy', buffer, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('COPY ASYNC DONE');
//       }
//     });
//   }
// });

// Promise, Future, Defer

const fs = require('fs');

fs.promises.readFile('.prettierrc')
  .then((buffer) => fs.promises.writeFile('.prettierrc.copy', buffer))
  .then(() => console.log('COPY ASYNC DONE'))
  .catch((err) => console.log(err));

// ES2017 async / await
// async function copy() {
//   try {
//     const buffer = await fs.promises.readFile('.prettierrc');
//     await fs.promises.writeFile('.prettierrc.copy', buffer);
//     console.log('COPY SYNC DONE');
//   } catch (err) {
//     console.log(err);
//   }
// }

// copy();

// ES2022 top level await
// try {
//   const buffer = await fs.promises.readFile('.prettierrc');
//   await fs.promises.writeFile('.prettierrc.copy', buffer);
//   console.log('COPY SYNC DONE');
// } catch (err) {
//   console.log(err);
// }
