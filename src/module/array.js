import Tasks from './tasks.js';
import display from './display.js';
import checker from './checker.js';
import linetru from './linetru.js';

export default class Arr {
  constructor() {
    this.todos = [];
  }

  addTodo(desc, main) {
    const fresh = new Tasks(desc, this.todos.length);
    this.todos.push(fresh);
    this.todos.map((todo) => display(todo, main));
  }

  removeTodo(id) {
    const pree = this.todos.filter((td) => td.unik !== id);
    this.todos.length = 0;
    this.todos.push (...this.todos, ...pree)
  }

  changeindex() {
     this.todos.forEach((todo,index) => todo.index = index)
    }

  changecomplete(check, get) {
    checker(check, get, this.todos);
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
    this.todos.forEach((to) => {
      if (to.complete === true) {
        const each = document.querySelectorAll('.each');
        each.forEach((e) => {
          if (to.unik === parseInt(e.dataset.unik) ) {
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
        const each = document.querySelectorAll('.each');
        each.forEach((tee) => {
          if (tee.id === 'completed') {
            tee.remove();
          }
      const pree = this.todos.filter((td) => td.complete !== true);
      this.todos.length = 0;
      this.todos.push (...this.todos, ...pree)
      
    });

    
  }
}
