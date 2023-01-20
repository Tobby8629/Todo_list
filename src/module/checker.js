const checker = (check, get, Arr) => {
  get.forEach((ge, index) => ge.addEventListener('click', () => {
    const grand = ge.parentElement.parentElement;
    grand.setAttribute('id', 'completed');
    const tasks = grand.querySelector('#tasks');
    tasks.classList.add('line');

    Arr.forEach((ar, i) => {
      if (i === index) {
        ar.complete = true;
      }
    });
    localStorage.setItem('store', JSON.stringify(Arr));
  }));

  check.forEach((chec, index) => chec.addEventListener('click', () => {
    const grand = chec.parentElement.parentElement;
    grand.removeAttribute('id');
    const tasks = grand.querySelector('#tasks');
    tasks.classList.remove('line');

    Arr.forEach((ar, i) => {
      if (i === index) {
        ar.complete = false;
      }
    });

    localStorage.setItem('store', JSON.stringify(Arr));
  }));
};

export default checker;