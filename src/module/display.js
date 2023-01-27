
const display = (arry, main) => {
  const view = `
    <div class="ic">
      <div class='white' id ='box' data-unik = ${arry.unik}></div>
      <i class="fa-solid fa-check" id ='check' data-unik = ${arry.unik}></i>
    </div>
    <form>
      <input type="text" id="tasks" value= "${arry.desc}"  data-unik = ${arry.unik} readonly >
    </form>
    <div class="icons">
        <i class="fa-solid fa-ellipsis-vertical" id="more"></i>
        <i class="fa-solid fa-trash" id="trash" data-unik = ${arry.unik}></i>
    </div>`;

  const each = document.createElement('div');
  each.classList.add('each');
  each.setAttribute('data-unik', arry.unik);

  each.innerHTML = view;
  main.appendChild(each);
};
export default display;