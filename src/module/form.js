import Arr from './array.js';
import more from './more.js';

const todo = new Arr();

const checker = ((check, get) => {
  get.forEach((ge) => ge.addEventListener('click', () => {
    const grand = ge.parentElement.parentElement;
    ge.parentElement.classList.add('it');
    grand.setAttribute('id', 'completed');
    const tasks = grand.querySelector('#tasks');
    tasks.classList.add('line');
    todo.changecomplete(parseInt(ge.dataset.unik, 10));
  }));

  check.forEach((chec) => chec.addEventListener('click', () => {
    const grand = chec.parentElement.parentElement;
    chec.parentElement.classList.remove('it');
    grand.removeAttribute('id');
    const tasks = grand.querySelector('#tasks');
    tasks.classList.remove('line');
    todo.changecomplete(parseInt(chec.dataset.unik, 10));
  }));
});

const form = () => {
  const master = document.querySelector('#master');
  const fort = document.querySelector('#form');
  const geh = document.querySelector('#name');

  fort.addEventListener('submit', (e) => {
    e.preventDefault();
    if (geh.value === '') { return; }
    master.innerHTML = '';
    todo.addTodo(geh.value, master);
    geh.value = '';

    more(todo);

    const remove = document.querySelectorAll('#trash');
    remove.forEach((re) => re.addEventListener('click', () => {
      todo.removeTodo(parseInt(re.dataset.unik, 10));
      todo.changeindex();
      localStorage.setItem('store', JSON.stringify(todo.todos));
      re.parentElement.parentElement.remove();
    }));

    const get = document.querySelectorAll('#box');
    const check = document.querySelectorAll('#check');
    const clean = document.querySelector('#clear');

    checker(check, get);
    todo.onfresh();

    clean.addEventListener('click', () => {
      const each = document.querySelectorAll('.each');
      each.forEach((tee) => {
        if (tee.id === 'completed') {
          tee.remove();
        }
      });
      todo.clear();
      todo.changeindex();
      localStorage.setItem('store', JSON.stringify(todo.todos));
    });
  });

  window.addEventListener('load', () => {
    const replay = JSON.parse(localStorage.getItem('store'));
    todo.reload(replay, master);

    const get = document.querySelectorAll('#box');
    const check = document.querySelectorAll('#check');
    checker(check, get);
    todo.onfresh();

    more(todo);

    const remove = document.querySelectorAll('#trash');
    remove.forEach((re) => re.addEventListener('click', () => {
      todo.removeTodo(parseInt(re.dataset.unik, 10));
      todo.changeindex();
      localStorage.setItem('store', JSON.stringify(todo.todos));
      re.parentElement.parentElement.remove();
    }));

    const clean = document.querySelector('#clear');
    clean.addEventListener('click', () => {
      const each = document.querySelectorAll('.each');
      each.forEach((tee) => {
        if (tee.id === 'completed') {
          tee.remove();
        }
      });
      todo.clear();
      todo.changeindex();
      localStorage.setItem('store', JSON.stringify(todo.todos));
    });
  });
};

export default form;
export { todo };