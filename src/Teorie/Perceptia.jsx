import ButtonsComponent from "./buttonComponents";
import "./stiluri.css";
import unde from '../imagini/unde.png'
export default function Perceptia() {
  return (
    <div class="flex h-auto">
      <div className="w-1/6 bg-gray-600 p-4 overflow-auto">
        <ButtonsComponent currentButton={3} />
      </div>
      <div className="w-5/6 p-4 flex flex-col bg-gray-100 ">
        <div className="mx-auto px-4 py-6">
        <h1>Percepția Culorilor</h1>
        <p>
          Percepția culorilor este un proces complex care implică atât fizica
          luminii, cât și fiziologia ochiului uman. Vom explora cum undele
          electromagnetice sunt percepute de ochi și interpretate de creier
          pentru a produce experiența vizuală a culorilor.
        </p>
        <h2>Undele Electromagnetice și Spectrul Vizibil</h2>
        <strong>
          Lumina este o formă de radiație electromagnetică, care variază în
          lungimi de undă. Spectrul vizibil pentru ochiul uman este cuprins
          între 380 nm (violet) și 750 nm (roșu). Fiecare culoare corespunde
          unei lungimi de undă specifice.
        </strong>
        <strong className="block">nm=nanometru</strong>
        <div className="flex flex-col lg:flex-row w-full">
  <ul className="w-full lg:w-2/4 ">
    <li>Violet: 380-450 nm </li>
    <li>Albastru: 450-495 nm</li>
    <li>Verde: 495-570 nm</li>
    <li>Galben: 570-590 nm</li>
    <li>Portocaliu: 590-620 nm</li>
    <li>Roșu: 620-750 nm</li>
  </ul>
  <div className="block lg:flex"><img src={unde} alt="unde" /></div>
</div>

        <h2>Fiziologia Percepției Culorilor</h2>
        <strong>
          Percepția culorilor începe în ochi, care conține receptori
          specializați numiți conuri și bastonașe:
        </strong>
        <label>
          <strong>Bastonașe:</strong> sensibile la intensitatea luminii, utile
          pentru vederea nocturnă.
        </label>
        <label>
          <storng>Conuri: </storng> sensibile la culori, utilizate în condiții
          de lumină puternică. Există trei tipuri de conuri:
        </label>
        <label>
          <strong>Conuri S</strong> (sensibile la albastru)
        </label>
        <label>
          <strong>Conuri M</strong> (sensibile la verde)
        </label>
        <label>
          <strong>Conuri L</strong> (sensibile la roșu)
        </label>

        <h2>Procesarea Culorilor în Creier</h2>
        <p>
          Informațiile captate de conuri sunt transmise prin nervul optic către
          creier. Aceste semnale sunt prelucrate în cortexul vizual, situat în
          lobul occipital al creierului, unde sunt integrate pentru a forma
          percepția culorilor.
        </p>
        <h2>Factori care Influenteaza Perceptia Culorilor</h2>
        <p>
          <strong>Iluminarea: </strong>diferite surse de lumină pot schimba
          modul în care vedem culorile.
        </p>
        <p>
          <strong>
          Contextul vizual:
          </strong>
          culorile sunt percepute diferit în funcție de culorile din jur.
        </p>
        <p>
          <strong>Adaptarea cromatică: </strong>expunerea prelungită la o
          culoare poate reduce sensibilitatea la acea culoare.
        </p>
        <h2>Concluzie </h2>
        <p>
          Percepția culorilor este rezultatul interacțiunii complexe dintre
          undele electromagnetice și sistemul vizual uman. Aceasta implică
          captarea luminii de către ochi și procesarea acesteia de către creier,
          influențată de factori precum iluminarea și contextul vizual.
        </p>
      </div>
    </div>
    </div>
  );
}
