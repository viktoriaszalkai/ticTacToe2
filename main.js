import TTTModell from "./modell/ticTacToeMOdell.js";
import Palya from "./view/Palya.js";


const taroloELEM = $(".jatekTer");

const tttModell = new TTTModell();
new Palya(tttModell.getList(), taroloELEM);

$(window).on("katt", (event) => {
  console.log(event.detail);
  tttModell.lepteto(event.detail);
  new Palya(tttModell.getList(), taroloELEM);
});
