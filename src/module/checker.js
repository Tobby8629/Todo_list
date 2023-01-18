const check = () => {
  const check = document.querySelectorAll('.ic');
  const get = document.querySelectorAll('#tasks');

  check.forEach((check) => check.addEventListener('click', () => {
    check.classList.toggle('it');
  }));
};

export default check;