import TTTModell from "../modell/TTTModell.js";
import Palya from "../view/Palya.js";

export default class TTTController {
  constructor() {
    this.taroloELEM = $(".jatekTer");
    this.tttModell = new TTTModell();
    new Palya(this.tttModell.getList(), this.taroloELEM);
    this.#esemenyKezelo();
  }

  #esemenyKezelo() {
    $(window).on("katt", (event) => {
      console.log(event.detail);
      this.tttModell.lepteto(event.detail);
      new Palya(this.tttModell.getList(), this.taroloELEM);
    });
  }
}


//példányosítja a modellt és a view-et
//feliratkozik az eseménykezelőkre
//az eseménykezelőben hívja meg a modell és a view megfelelő metódusait
//lekéri az aktuális állapotát a listának, tud példányosítani