const more = (todo) => {
  const more = document.querySelectorAll('#more');
  more.forEach((mor, cmt) => (
    mor.addEventListener('click', () => {
      const pop = mor.parentElement;
      pop.classList.add('pop');
      const each = mor.parentElement.parentElement;
      each.classList.add('anti');
      const replace = mor.parentElement.previousElementSibling.querySelector('#tasks');
      replace.removeAttribute('readonly');
      replace.focus();
      replace.addEventListener('keyup', () => {
        todo.updatetodo(cmt, replace);
        localStorage.setItem('store', JSON.stringify(todo.todos));
      });
      const parent = mor.parentElement.previousElementSibling;
      parent.addEventListener('submit', (e) => {
        e.preventDefault();
        replace.setAttribute('readonly', 'readonly');
        each.classList.remove('anti');
        pop.classList.remove('pop');
      });
    })
  ));
};

export default more;