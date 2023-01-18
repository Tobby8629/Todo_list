const display = (arry, main) => {
  const view = `
    <div class="ic">
      <div class='white'></div>
      <i class="fa-solid fa-check"></i>
    </div>
    <form>
      <input type="text" id="tasks" value= "${arry.desc}" readonly >
    </form>
    <div class="icons">
        <i class="fa-solid fa-ellipsis-vertical" id="more"></i>
        <i class="fa-solid fa-trash" id="trash"></i>
    </div>`;

  const each = document.createElement('div');
  each.classList.add('each');
  each.innerHTML = view;
  main.appendChild(each);
};
export default display;