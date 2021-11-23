// SPREAD Operator
// conversion syntaxique
// tableau -> liste de valeur
const nbs = [2, 3, 4];
const clone = [...nbs];

function sum(a, b, c) {
  return a + b + c;
}

//  2, 3, 4
sum(...nbs);

// Destructurer un tableau
// const parts = "Romain,Bohdanowicz".split(',');
// const prenom = parts[0];
// const nom = parts[1];


// REST Param

//    ['Romain', 'Bohdanowicz', 'Toto', 'Titi']
const [prenom  , nom          , ...others     ] = "Romain,Bohdanowicz,Toto,Titi".split(',');

console.log(others[0]); // Toto
console.log(others[1]); // Titi

//                1, 2, 3
function multiply(...nbs) {
  const result = 1;

  for (const nb of nbs) {
    result *= nb
  }

  return result;
}

console.log(multiply(1, 2, 3)); // 1 * 2 * 3


// SPREAD Object

const coords = {x: 1, y: 2};

//                   x: 1, y: 2
const cloneCoords = {...coords};

// REST Object
const coords3d = {x: 1, y: 2, z: 3};

//    {z: 3, x: 1, y: 2 }
const {z: z, ...coords2d} = coords3d;

console.log(coords2d.x); // 1
console.log(coords2d.y); // 2
