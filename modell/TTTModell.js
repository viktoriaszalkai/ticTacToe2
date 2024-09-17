export default class TTTModell {
  #LISTA = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  #lepes;
  #aktElem;
  constructor() {
    this.#lepes = 0;
    this.#setAktElem();
  }

  #setAktElem() {
    if (this.#lepes % 2 === 0) {
      this.#aktElem = "X";
    } else {
      this.#aktElem = "O";
    }
  }

 /*  getAktElem() {
    return this.#aktElem;
  } */
  getList() {
    return this.#LISTA;
  }
  lepteto(index) {
    this.#LISTA[index] = this.#aktElem;
    this.#lepes++;
    this.#setAktElem();
  }
}

//csak az adatokkkal foglalkozik, előállítja a priogram aktuális állapotát, előálítja a következő állapotot (x/o, ki következik, mi a kimenetel)
//beírja az akt elmetz megnöveli egyel, majd beírja a következő elemet