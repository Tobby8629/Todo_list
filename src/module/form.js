import Arr from './array.js';
import more from './more.js';


const form = () => {
  const master = document.querySelector('#master');
  const fort = document.querySelector('#form');
  const geh = document.querySelector('#name');

  const todo = new Arr();

  fort.addEventListener('submit', (e) => {
    e.preventDefault();
    if (geh.value === '') {
      return;
    }
    master.innerHTML = '';
    todo.addTodo(geh.value, master);
    geh.value = '';
    localStorage.setItem('store', JSON.stringify(todo.todos));

    more(todo);

    const remove = document.querySelectorAll('#trash');
    remove.forEach((re) => re.addEventListener('click', () => {
      todo.removeTodo(parseInt(re.dataset.unik,10))
      todo.changeindex();
      localStorage.setItem('store', JSON.stringify(todo.todos));
      re.parentElement.parentElement.remove();
    }));

    const get = document.querySelectorAll('#box');
    const check = document.querySelectorAll('#check');
    todo.changecomplete(check, get);
    todo.onfresh();

    const clean = document.querySelector('#clear');

    clean.addEventListener('click', () => {
      todo.clear();
      todo.changeindex();
      localStorage.setItem('store', JSON.stringify(todo.todos));
    });
    console.log(todo)
  });

  window.addEventListener('load', () => {
    const replay = JSON.parse(localStorage.getItem('store'));
    if (replay !== []) {
      todo.reload(replay, master);
    }
    

    
    const get = document.querySelectorAll('#box');
    const check = document.querySelectorAll('#check');
    todo.changecomplete(check, get);
    todo.linetr();

    more(todo);

    const remove = document.querySelectorAll('#trash');
    remove.forEach((re) => re.addEventListener('click', () => {
      todo.removeTodo(parseInt(re.dataset.unik,10))
      todo.changeindex();
      localStorage.setItem('store', JSON.stringify(todo.todos));
      re.parentElement.parentElement.remove();      
    }));


  const clean = document.querySelector('#clear');
  clean.addEventListener('click', () => {
    todo.clear();
    todo.changeindex();
    localStorage.setItem('store', JSON.stringify(todo.todos));
  });
  });

};

export default form;