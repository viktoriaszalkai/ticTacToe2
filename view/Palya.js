import Mezo from "./Mezo.js";
export default class Palya {
  #palyaLista = [" "," "," "," "," "," "," "," "," "];
  #szuloElem;

  constructor(palyaLista, szuloElem) {
    this.#palyaLista = palyaLista;
    this.#szuloElem = szuloElem;
    this.#szuloElem.empty();
    this.palyaKiir();
  }

  palyaKiir() {
    this.#palyaLista.forEach((elem,index) => {
      new Mezo(elem,index,this.#szuloElem);
    });
  }
}

//view- az aktuális állapotott megjeleníti, az akt állapotról az információkat a contollen KERESZTÜL kapja meg( modell-controller-view)