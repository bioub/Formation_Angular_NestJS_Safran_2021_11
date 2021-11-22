function externe2() {
  // portée de closure
  const variable = 'Toto';
  function interne() {
    console.log(variable);
  }
  return interne;
}

const maFonction = externe2();
maFonction();

// pile
// ^
// |
// |          log
// |externe - interne
// +-----------> temps
