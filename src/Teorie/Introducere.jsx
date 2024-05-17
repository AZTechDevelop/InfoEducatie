import ButtonsComponent from "./buttonComponents";
import "./stiluri.css";

function Introducere() {
  return (
    <>
      <div class="flex h-auto">
        <div className="w-1/6 bg-gray-600 p-4 overflow-auto">
          <ButtonsComponent currentButton={1} />
        </div>
        <div className="w-5/6 p-4 flex flex-col bg-gray-100">
          <div className="mx-auto px-4 py-6">
            <h1>Introducere</h1>
            <h1 className="text-2xl">
              Ce este culoarea? Culoarea este modul în care ochiul nostru
              percepe diferite frecvențe ale luminii.{" "}
            </h1>
            <h2>Ce Ve-i Învăța Aici:</h2>
            <ul>
              <li>
                <strong>Diferite Sistemele de culori: </strong>unde se folosesc
                si de ce s-au creat?
              </li>
              <li>
                <strong>Fundamentele Teoriei Culorilor:</strong> Explorăm
                culorile primare, secundare și terțiare, detalii despre cum
                acestea se combină pentru a forma spectrul vizibil.
              </li>
              <li>
                <strong>Psihologia Culorilor:</strong> Cum percepem culorile și
                impactul lor emoțional asupra noastră.
              </li>
              <li>
                <strong>Armonia Culorilor:</strong> Tehnici pentru crearea de
                scheme de culori echilibrate.
              </li>
              <li>
                <strong>Durabilitatea Culorilor:</strong> Abordăm
                sustenabilitatea în utilizarea culorilor, importantă în designul
                eco-conștient.
              </li>
              <li>
                <strong>Culoare și Branding:</strong> Rolul esențial al
                culorilor în identitatea de brand.
              </li>
              <li>
                <strong>Aplicații Practice:</strong> Aplicăm cunoștințele despre
                culori în design grafic, design interior, modă și alte domenii
                creative.
              </li>
            </ul>

            <h2>Interactivitate și Resurse:</h2>
            <p>
              Interactive quizzes la finalul fiecărui modul pentru evaluarea și
              consolidarea învățăturilor. Aceleasi quizz-uri le gasiti si in
              bara de navigatie de sus, in cazul in care doriti sa rezolvati din
              nou un quiz, sa nu trebuiasca sa cautati din nou sectiunea aici.
            </p>
            <p>
              <strong>Laboratorul de Culori:</strong> Un tool interactiv unde
              poți experimenta cele mai importate 7 sistemel de culori: TGB,
              RGBA, HEX, HSL,{" "}
            </p>

            <h2>Importanța Teoriei Culorilor:</h2>
            <p>
              Teoria culorilor este crucială pentru oricine creează vizual.
              Înțelegerea aceasta poate transforma orice proiect din simplu în
              extraordinar.
            </p>

            <strong className="text-3xl text-blue-500">
              Sa inceapa explorarea !
            </strong>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introducere;
