import Arr from './array.js';
import more from './more.js';

const form = () => {
  const master = document.querySelector('#master');
  const fort = document.querySelector('#form');
  const get = document.querySelector('#name');

  const todo = new Arr();

  fort.addEventListener('submit', (e) => {
    e.preventDefault();
    master.innerHTML = '';
    todo.addTodo(get.value, master);
    get.value = '';
    localStorage.setItem('store', JSON.stringify(todo.todos));

    const gro = document.querySelectorAll('#box');
    const check = document.querySelectorAll('#check');

    todo.onfresh();

    more(todo);

    todo.changecomplete(check, gro);

    const remove = document.querySelectorAll('#trash');
    remove.forEach((re, index) => re.addEventListener('click', () => {
      const very = index + 1;
      re.parentElement.parentElement.remove();
      todo.removeTodo(very);
      todo.changeindex();
      localStorage.setItem('store', JSON.stringify(todo.todos));
    }));

    const clean = document.querySelector('#clear');

    clean.addEventListener('click', () => {
      todo.clear();
      todo.changeindex();
      localStorage.setItem('store', JSON.stringify(todo.todos));
    });
  });

  window.addEventListener('load', () => {
    const replay = JSON.parse(localStorage.getItem('store'));
    todo.reload(replay, master);

    const gro = document.querySelectorAll('#box');
    const check = document.querySelectorAll('#check');

    more(todo);
    todo.changecomplete(check, gro);
    todo.linetr();

    const remove = document.querySelectorAll('#trash');
    remove.forEach((re, index) => re.addEventListener('click', () => {
      const very = index + 1;
      re.parentElement.parentElement.remove();
      todo.removeTodo(very);
      todo.changeindex();
      localStorage.setItem('store', JSON.stringify(todo.todos));
    }));
  });

  const clean = document.querySelector('#clear');

  clean.addEventListener('click', () => {
    todo.clear();
    todo.changeindex();
    localStorage.setItem('store', JSON.stringify(todo.todos));
  });
};

export default form;