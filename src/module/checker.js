const check = () => {
  const check = document.querySelectorAll('.ic');
  check.forEach((check) => check.addEventListener('click', () => {
    check.classList.toggle('it');
  }));
};

export default check;