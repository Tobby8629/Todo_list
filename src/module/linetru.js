const linetru = (tass) => {
  tass.forEach((tas) => {
    if (tas.complete === true) {
      const tasks = document.querySelectorAll('#tasks');
      tasks.forEach((tif) => {
        if (parseInt(tif.dataset.unik) === tas.unik) {
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
