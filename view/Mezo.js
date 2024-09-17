export default class Mezo {
  #mezoJel = {};
  #index;
  #szuloElem;
  constructor(mezoJel, index, szuloElem) {
    this.#mezoJel = mezoJel;
    this.#index = index;
    this.#szuloElem = szuloElem;
    this.mezotKiir();
    this.gombElem = $(".mezo:last-child");
    if(this.#mezoJel===" "){
        this.gombKattintas();
    }
   
  }
  mezotKiir() {
    this.#szuloElem.append(`<div class="mezo"><p>${this.#mezoJel}</p></div>`);
  }

  gombKattintas() {
    this.gombElem.on("click",()=>{
        const e = new CustomEvent("katt", {detail: this.#index});
        window.dispatchEvent(e);
    })
  }
}
