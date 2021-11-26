const { createStore } = require('redux');

const initialState = {
  count: 0,
};

// fonction pure
// - prédictive, appelée avec des paramètres donnés
// elle a toujours le même retour
// ex : sum(1, 2) === 3
// contre-ex : Math.random() === ????
// - elle ne modifie pas ses paramètres
// - elle n'a pas de side-effect, pas de requete HTTP
// pas d'accès au localStorage
function reducer(state = initialState, action) {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      count: state.count + action.payload,
    };
  }

  return state;
}

/** @type {import('redux').Store} */
const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

// console.log(store.getState()); // {count: 0}

store.dispatch({ type: 'INCREMENT', payload: 10 });
// console.log(store.getState()); // {count: 10}

store.dispatch({ type: 'TOTO' });
// console.log(store.getState()); // {count: 10}
