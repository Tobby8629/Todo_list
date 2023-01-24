export default class Tasks {
  constructor(desc, index, unik) {
    this.desc = desc;
    this.complete = false;
    this.index = index;
    this.unik = Math.floor(Math.random() * 1000);
  }
}
