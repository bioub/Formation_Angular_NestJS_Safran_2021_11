const fs = require('fs');

try {
  const buffer = fs.readFileSync('.prettierrc');
  fs.writeFileSync('.prettierrc.copy', buffer);
  console.log('COPY SYNC DONE');
} catch (err) {
  console.log(err);
}

// pile
// ^
// |
// |
// |try { readFileSync XXXXXXXXXXX - writeFileSync XXXXXXXXXXX - lg }
// +------------------------------------------------------------------> temps
//                                                               DONE

// Callback Hell - Pyramid of doom
fs.readFile('.prettierrc', (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('.prettierrc.copy', buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('COPY ASYNC DONE');
      }
    });
  }
});

// pile
// ^
// |
// |                     writeFile           lg
// |readFile ..⟳..       cbR       ..⟳..     cbW
// +---------------------------------------------> temps
//                                           DONE
