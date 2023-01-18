import Tasks from './tasks.js';
import display from './display.js';

export default class Array {
  constructor() {
    this.todos = [];
  }

  addTodo(desc, main) {
    const fresh = new Tasks(desc, this.todos.length + 1);
    this.todos.push(fresh);
    this.todos.map((todo) => display(todo, main));
  }

  removeTodo(id) {
    this.todos = this.todos.filter((td) => td.index !== id);
  }

  changeindex() {
    this.todos.forEach((todo, index) => (
      todo.index = index + 1
    ));
  }

  updatetodo(cmt, replace) {
    this.todos.forEach((todo, index) => (
      index === cmt && (todo.desc = replace.value)
    ));
  }

  reload(replay, main) {
    this.todos.push(...this.todos, ...replay);
    this.todos.map((todo) => display(todo, main));
  }
}
