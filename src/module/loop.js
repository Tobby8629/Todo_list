import array from './array.js';
import display from './display.js';

const call = () => {
  const master = document.querySelector('#master');
  const k = 100;
  for (let i = 1; i < k; i += 1) {
    array.map((ar) => (
      ar.index === i && display(ar, master)
    ));
  }
};
export default call;
