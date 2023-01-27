import Tasks from './tasks.js';
import display from './display.js';

export default class Arr {
  constructor() {
    this.todos = [];
  }

  addTodo(desc, main) {
    const fresh = new Tasks(desc, this.todos.length);
    this.todos.push(fresh);
    this.todos.map((todo) => display(todo, main));
    localStorage.setItem('store', JSON.stringify(this.todos));
  }

  removeTodo(id) {
    const pree = this.todos.filter((td) => td.unik !== id);
    this.todos.length = 0;
    this.todos.push(...this.todos, ...pree);
  }

  changeindex() {
    this.todos.forEach((todo, index) => { todo.index = index; });
  }

  changecomplete(id) {
    this.todos.forEach((ar) => {
      if (ar.unik === id) {
        ar.complete = !ar.complete;
      }

      localStorage.setItem('store', JSON.stringify(this.todos));
    });
  }

  updatetodo(cmt, replace) {
    this.todos.forEach((todo, index) => {
      if (index === cmt) {
        (
          (todo.desc = replace.value)
        );
      }
      localStorage.setItem('store', JSON.stringify(this.todos));
    });
  }

  reload(replay, main) {
    this.todos.push(...this.todos, ...replay);
    this.todos.map((todo) => display(todo, main));
  }

  onfresh() {
    this.todos.forEach((to) => {
      if (to.complete === true) {
        const each = document.querySelectorAll('.each');
        each.forEach((e) => {
          if (to.unik === parseInt(e.dataset.unik, 10)) {
            e.setAttribute('id', 'completed');
            const pro = e.querySelector('.ic');
            pro.classList.add('it');
            const pre = e.querySelector('#tasks');
            pre.classList.add('line');
          }
        });
      }
    });
  }

  clear() {
    const pree = this.todos.filter((td) => td.complete !== true);
    this.todos.length = 0;
    this.todos.push(...this.todos, ...pree);
  }
}
