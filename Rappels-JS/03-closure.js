function externe() {
  // portée de closure
  const variable = 'Toto';
  function interne() {
    console.log(variable);
  }
  interne();
}

externe();

// pile
// ^
// |log
// |interne
// |externe
// +-----------> temps
