import ButtonsComponent from "./buttonComponents";
import { useState } from "react";
import MixerCuloareRGBA from "./componente/MixerCuloriRGBA";

export default function Sistemele() {
  const [color, setColor] = useState("white");

  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    switch (selectedColor) {
      case "roșu":
        setColor("red");
        break;
      case "verde":
        setColor("green");
        break;
      case "albastru":
        setColor("blue");
        break;
      case "roșu+verde":
        setColor("yellow");
        break;
      case "roșu+albastru":
        setColor("magenta");
        break;
      case "verde+albastru":
        setColor("cyan");
        break;
      case "Alb":
        setColor("white");
        break;
      default:
        setColor("black");
    }
  };
  return (
    <>
      <div class="flex h-auto">
        <div className="w-1/6 bg-gray-600 p-4 overflow-auto">
          <ButtonsComponent currentButton={9} />
        </div>
        <div className="w-5/6 p-4 flex flex-col bg-gray-100">
          <div className="mx-auto px-4 py-6">
          <h1>Sistemele de Culori</h1>
          <p>
            În lumea designului digital, înțelegerea și utilizarea corectă a
            sistemelor de culori este esențială. Fie că este vorba de crearea
            unui website, designul unei aplicații sau elaborarea materialelor
            grafice, cunoașterea modului în care culorile sunt reprezentate și
            manipulate poate avea un impact semnificativ asupra rezultatului
            final.{" "}
          </p>
          <h4>
            Sistemele RGB, RGBA, HEX, CMYK și HSL sunt fundamentale pentru orice
            designer digital.
          </h4>
          <h2>1.RGB (Red, Green, Blue)</h2>

          <p>
            2.RGB este un model de culoare aditiv folosit predominant în
            tehnologiile digitale care emit lumină, precum monitoare,
            televizoare și ecrane de telefon. Acest model se bazează pe teoria
            comform căreia lumina albă poate fi obținută prin suprapunerea
            luminilor roșii, verzi și albastre. Culorile sunt create prin
            iluminarea subpixelilor.
          </p>

          <p>
            În modelul RGB, fiecare culoare este reprezentată ca o combinație a
            trei valori, corespunzând intensităților roșu, verde și albastru.
            Fiecare componentă poate avea o valoare între 0 (absența completă a
            culorii) și 255 (prezența completă a culorii), ceea ce oferă
            posibilitatea de a reprezenta până la 16,777,216 de culori diferite.
          </p>
          <h4 className="w-full md:w-2/6 mt-4">Mixer de Culori RGB</h4>
          <div className=" flex w-full items-center h-auto">
            <div className="w-3/5">
              <p>Toate culorile vor lua valoarea 255 (cea mai mare)</p>
            </div>
            <div className="flex justify-center items-center text-center w-2/5">
              <select
                onChange={handleColorChange}
                className="form-select appearance-none flex w-auto px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              >
                <option value="Alb">Alb</option>
                <option value="roșu">Roșu</option>
                <option value="verde">Verde</option>
                <option value="albastru">Albastru</option>
                <option value="roșu+verde">Roșu + Verde</option>
                <option value="roșu+albastru">Roșu + Albastru</option>
                <option value="verde+albastru">Verde + Albastru</option>
                <option value="roșu+verde+albastru">
                  Roșu + Verde + Albastru
                </option>
              </select>

              <div
                style={{
                  marginTop: "20px",
                  marginLeft: "50px",
                  width: "100px",
                  height: "100px",
                  backgroundColor: color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Culoarea Rezultată
              </div>
            </div>
          </div>

          <h2>RGBA (Red, Green, Blue, Alpha)</h2>
          <p>
            RGBA adaugă o componentă de transparență denumită Alpha la modelul
            RGB. Această componentă controlează opacitatea culorii, unde 0
            reprezintă complet transparent și 1 reprezintă complet opac.
          </p>
          <p>
            Alpha este folosit pentru a crea efecte de suprapunere sau
            transparență în imagini și design-uri, permițând vizibilitatea
            elementelor de sub stratul superior.
          </p>
          <p>
            Este extrem de util în designul web și grafică digitală, RGBA
            permite designerilor să suprapună elemente fără a pierde informații
            vizuale din spatele elementelor transparente.
          </p>

          <MixerCuloareRGBA />
          <h2>3. HEX (Hexadecimal Color Model)</h2>
          <p>
            HEX reprezintă o metodă de codificare a informațiilor despre culoare
            în format hexazecimal. Este o formă compactă a modelului RGB, unde
            fiecare componentă de culoare este reprezentată de două cifre
            hexazecimale.
          </p>
          <p>
            Fiecare pereche poate varia între 00 și FF în sistemul hexazecimal,
            unde 00 reprezintă absența completă a culorii respective și FF
            reprezintă prezența maximă a culorii.
          </p>
          <p>
            Un cod HEX este format dintr-un simbol # urmat de șase cifre.
            Primele două cifre reprezintă intensitatea roșu, următoarele două
            verde, iar ultimele două albastru. De exemplu, #FFFFFF reprezintă
            alb, iar #000000 este negru.
          </p>
          <p>
            HEX este predominant folosit în designul web și în specificațiile de
            culoare în stilurile CSS, datorită ușurinței de utilizare și a
            compatibilității universale în browsere.
          </p>

          <h2>4. CMYK (Cyan, Magenta, Yellow, Key/Black)</h2>
          <p>
            CMYK este un model de culoare substractiv, utilizat în principal
            pentru imprimare. Acesta funcționează prin absorbția anumitor
            lungimi de undă ale luminii, opusul modelului aditiv RGB.
          </p>
          <p>
            Culorile în CMYK sunt create prin combinarea diferitelor niveluri de
            cyan, magenta, galben și negru. Creșterea intensității fiecărei
            culori reduce cantitatea de lumină reflectată, generând o gamă largă
            de nuanțe.
          </p>
          <p>
            CMYK este esențial în industria tipografică pentru a asigura
            imprimarea corespunzătoare așteptărilor din design-ul digital, fiind
            utilizat pentru tot de la cărți și reviste, la afișe și broșuri.
          </p>

          <h2>5. HSL (Hue, Saturation, Lightness)</h2>
          <p>
            HSL este un model de culoare alternativ la RGB, conceput pentru a fi
            mai intuitiv. Nuanța (Hue) este reprezentată ca un grad pe cercul de
            culori, saturația (Saturation) ca un procentaj, iar luminozitatea
            (Lightness) de asemenea ca un procentaj.
          </p>
          <p>
            Nuanța (Hue) este un unghi de la 0 la 360 grade, saturația este
            procentul de culoare pură în combinație, iar luminozitatea indică
            cât de apropiat este de alb (100%) sau negru (0%).
          </p>
          <p>
            Modelul HSL este frecvent utilizat în software-urile de editare foto
            și în designul web, oferind designerilor o metodă mai directă de a
            ajusta culorile fără a modifica fiecare componentă RGB individual.
          </p>

          <h2>Concluzie</h2>
          <p>
            Înțelegerea și aplicarea corespunzătoare a acestor modele de culoare
            sunt cruciale pentru succesul în domeniul designului digital.
            Fiecare model are particularitățile sale și \ este adaptat pentru
            utilizări specifice, oferind creatorilor de conținut digital
            instrumentele necesare pentru a realiza vizualuri atractive și
            eficiente.
          </p>
        </div>
        </div>
      </div>
    </>
  );
}
