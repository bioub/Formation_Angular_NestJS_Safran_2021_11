function externe() {
  // portée de closure
  const variable = 'Toto';
  function interne() {
    console.log(variable);
  }
  return interne;
}

const maFonction = externe();
maFonction();

// pile
// ^
// |
// |          log
// |externe - interne
// +-----------> temps
