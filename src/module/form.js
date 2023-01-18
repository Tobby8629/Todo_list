import Array from './array.js';
import check from './checker.js';
import more from './more.js';

const form = () => {
  const master = document.querySelector('#master');
  const fort = document.querySelector('#form');
  const get = document.querySelector('#name');

  const todo = new Array();

  fort.addEventListener('submit', (e) => {
    e.preventDefault();
    master.innerHTML = '';
    todo.addTodo(get.value, master);
    get.value = '';
    check();
    localStorage.setItem('store', JSON.stringify(todo.todos));

    more(todo);

    const remove = document.querySelectorAll('#trash');
    remove.forEach((re, index) => re.addEventListener('click', () => {
      re.parentElement.parentElement.remove();
      todo.removeTodo(index);
      todo.changeindex();
      localStorage.setItem('store', JSON.stringify(todo.todos));
    }));
  });

  window.addEventListener('load', () => {
    const replay = JSON.parse(localStorage.getItem('store'));
    todo.reload(replay, master);

    more(todo);
    const remove = document.querySelectorAll('#trash');
    remove.forEach((re, index) => re.addEventListener('click', () => {
      re.parentElement.parentElement.remove();
      todo.removeTodo(index);
      todo.changeindex();
      localStorage.setItem('store', JSON.stringify(todo.todos));
    }));
  });
};

export default form;