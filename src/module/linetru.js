const linetru = (tass) => {
  tass.forEach((tas, n) => {
    if (tas.complete === true) {
      const tasks = document.querySelectorAll('#tasks');
      tasks.forEach((tif, p) => {
        if (n === p) {
          tif.classList.add('line');
          const paren = tif.parentElement.parentElement;
          const eff = paren.querySelector('.ic');
          paren.setAttribute('id', 'completed');
          eff.classList.add('it');
        }
      });
    }
  });
};

export default linetru;
