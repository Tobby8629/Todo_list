const checker = (check, get, Arr) => {
  get.forEach((ge) => ge.addEventListener('click', () => {
    const grand = ge.parentElement.parentElement;
    grand.classList.add('it');
    grand.setAttribute('id', 'completed');
    const tasks = grand.querySelector('#tasks');
    tasks.classList.add('line');

    Arr.forEach((ar) => {
      if (ar.unik === parseInt(ge.dataset.unik,10) ) {
        ar.complete = true;
      }
      localStorage.setItem('store', JSON.stringify(Arr));
    });
    
  }));

  check.forEach((chec) => chec.addEventListener('click', () => {
    const grand = chec.parentElement.parentElement;
    grand.classList.remove('it');
    grand.removeAttribute('id');
    const tasks = grand.querySelector('#tasks');
    tasks.classList.remove('line');

    Arr.forEach((ar) => {
      if (ar.unik === parseInt(chec.dataset.unik,10)) {
        ar.complete = false;
      }
      localStorage.setItem('store', JSON.stringify(Arr));
    });

    
  }));
};

export default checker;
