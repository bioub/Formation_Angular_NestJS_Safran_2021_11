const { memoize } = require('lodash');

let todos = new Array(20_000_000).fill({}).map(() => ({
  id: Math.random(),
  title: 'ABC',
  completed: Math.random() > 0.5,
}));

function getCompletedTodos(todos) {
  return todos.filter((t) => t.completed);
}

const getCompletedTodosMemo = memoize(getCompletedTodos);

console.time('getCompletedTodos');
console.log(getCompletedTodosMemo(todos).length);
console.timeEnd('getCompletedTodos');

// todos.push({completed: true});
todos = [...todos, {completed: true}];

console.time('getCompletedTodos');
console.log(getCompletedTodosMemo(todos).length);
console.timeEnd('getCompletedTodos');
