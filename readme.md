# MVC működés(modell, view, controller)
### Tervezési minták: A kód szervezésének „jó gyakorlatai”, újrafelhasználható megoldások a szoftvertervezés során feljövő gyakori problémákra.
 Architectural pattern : azzal foglalkozik, hogy az egyes objektumok hogy kapcsolódnak egymáshoz. 
## Modell-adat:csak az adatokkkal foglalkozik, előállítja a program aktuális állapotát
## View-megjelenés: //view- az aktuális állapotott megjeleníti, az akt állapotról az információkat a contollen KERESZTÜL kapja meg( modell-controller-view)
## Controller-kommunikáció a modell és a view között :
1. példányosítja a modellt és a view-et
2. az eseménykezelőben hívja meg a modell és a view megfelelő metódusait

### TicTacToe-ban
1.  Modell - előállítja a program aktuális állapotát, előállítja a következő állapotot (x/o, ki következik, mi a kimenetel).
    beírja az akt elemet megnöveli egyel, majd beírja a következő elemet.
    Metódusai: -#setAktElem()- páros vagy páratlan lépésre beállítja, az x/o szimbólumot
               -getList()- visszaadja a LISTA-t a Controllernek, mert a LISTA prívát adattag a Contlorrel számára nem elérhető.
               -lepteto(index) - beírja az aktuális elemet, majd megnöveli egyel
2.  View (Palya, Mezo) - a Mezo tudja magáról az indexét, egy divet jelenít meg(mezotKiir()), saját eseményt tud generálni(gombKattintas()).
                       - A Palya példányosítja a Mezo-t(palyaKiir())
3.  Controller - az eseménykezelőben hívja meg a modell és a view megfelelő metódusait
               - lekéri az aktuális állapotát a listának, tud példányosítani
 