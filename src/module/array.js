import Tasks from './tasks.js';
import display from './display.js';
import checker from './checker.js';
import linetru from './linetru.js';

export default class Arr {
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
    this.todos.forEach((todo, index) => {
      todo.index = index + 1;
    });
  }

  changecomplete(ree, bee) {
    checker(ree, bee, this.todos);
  }

  updatetodo(cmt, replace) {
    this.todos.forEach((todo, index) => {
      if (index === cmt) {
        (
          (todo.desc = replace.value)
        );
      }
    });
  }

  reload(replay, main) {
    this.todos.push(...this.todos, ...replay);
    this.todos.map((todo) => display(todo, main));
  }

  linetr() {
    linetru(this.todos);
  }

  onfresh() {
    this.todos.forEach((to, n) => {
      if (to.complete === true) {
        const each = document.querySelectorAll('.each');
        each.forEach((e, p) => {
          if (n === p) {
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
    this.todos.forEach((tas) => {
      if (tas.complete === true) {
        const each = document.querySelectorAll('.each');
        each.forEach((tee) => {
          if (tee.id === 'completed') {
            tee.remove();
          }
        });
      }
    });

    this.todos = this.todos.filter((td) => td.complete !== true);
  }
}
