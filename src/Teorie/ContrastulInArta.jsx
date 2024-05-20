import ButtonsComponent from "./buttonComponents";
import "./stiluri.css";
import RoataCuloriNatura from "./componente/RoataCuloriNatura";

function ContrastTypes() {
  return (
    <>
      <div className="flex h-auto">
        <div className="w-1/6 bg-gray-600 p-4 overflow-auto">
          <ButtonsComponent currentButton={6} />
        </div>
        <div className="w-5/6 p-4 flex flex-col bg-gray-100 mx-auto px-4 py-6">
          <div className="mx-auto px-4 py-6">
            <h1>Contrastul in Artă</h1>

            <section>
              <div className="flex w-full justify-between">
                <div>
                  <h2>Culori în sistemul substractiv (pigmenți) . Artă</h2>
                  <p className="w-full">
                    În sistemul de culori substractiv (pigmenți), cum ar fi cel
                    utilizat în pictură și printare: Roșu (specific mai des ca
                    magenta în printare), Galben, Albastru (specific mai des ca
                    cyan în printare)
                  </p>
                  <ol className="list-decimal list-inside">
                    <li className="w-full">
                      <strong>Culori Primare:</strong> roșu, albastru
                      și galben, acestea sunt culorile de bază din care
                      se pot obține toate celelalte culori prin amestecare.
                    </li>
                    <li className="w-full">
                      <strong>Culori Secundare:</strong> Obținute prin combinarea
                      culorilor primare: portocaliu (rosu + galben), verde
                      (albastru + galben), violet (rosu + albastru).
                    </li>
                    <li>
                      <strong>Culori Terțiare:</strong> Rezultă din combinarea
                      unei culori primare cu o culoare secundară adiacentă pe
                      roata culorilor, cum ar fi roșu-portocaliu sau
                      albastru-verde.
                    </li>
                  </ol>
                </div>
                <div className="w-2/6 h-auto">
                  <RoataCuloriNatura />
                </div>
              </div>
              <br />
              <p>Culorile se mai pot clasifica și așa: </p>
              <ol className="list-decimal list-inside">
                <li>
                  <strong>Culori Calde:</strong> Roșu, portocaliu, galben, care
                  evocă energie și căldură.
                </li>
                <li>
                  <strong>Culori Reci:</strong> Verde, albastru, violet, asociate
                  cu calmul și relaxarea.
                </li>
              </ol>
            </section>
            <p>
              Contrastul este diferența vizuală între elementele unei compoziții,
              care poate fi exprimată prin culoare, luminozitate, dimensiune,
              formă sau textură, accentuând astfel diversitatea și îmbogățind
              percepția vizuală a observatorului.
            </p>
            <h2>Cele 7 tipuri de contraste în artă </h2>
            <ol>
              <li>
                <h2> Contrastul culorii în sine</h2>
                <p>

                  Acest contrast implică utilizarea a minim trei culori pure.
                  Impactul vizual este direct proporțional cu puritatea și
                  apropierea culorilor față de cele primare. Contrastul devine mai
                  subtil pe măsură ce culorile se îndepărtează de starea lor pură.{" "}
                </p>
                <div className="flex w-full justify-between">
                  <div
                    className="mt-5 w-1/5"
                    style={{ background: "red", height: "50px" }}
                  ></div>

                  <div
                    className="mt-5 w-1/5"
                    style={{ background: "yellow", height: "50px" }}
                  ></div>

                  <div
                    className="mt-5 w-1/5"
                    style={{ background: "blue", height: "50px" }}
                  ></div>
                </div>
              </li>
              <li>
                <h2>Contrastul clar-obscur (valoric)</h2>
                <p>
                  Contrastul între tonurile luminoase și cele întunecate, adăugând
                  adâncime și atrăgând atenția asupra anumitor părți ale unei
                  lucrări.
                </p>
                <div
                  className="w-full rounded-lg my-4 "
                  style={{
                    height: "50px",
                    backgroundImage:
                      "linear-gradient(to right, #003366, #6699CC, #B0C4DE)",
                  }}
                ></div>
                <p>
                  Acest contrast poate exista și în lipsa culorii (contrastul
                  dintre alb, griuri și negru) sau în cazul existenței unei
                  singure culori plus alb, diferite nuanțe de gri sau negru.
                </p>
                <div className="flex w-full">
                  <div
                    className="mt-5 w-full rounded-lg"
                    style={{
                      background:
                        "linear-gradient(to right, #000000, #555555, #ffffff)",
                      height: "50px",
                    }}
                  ></div>
                </div>
              </li>
              <li>
                <div>
                  <h2>Contrastul cald-rece</h2>
                  <p>
                    Acest contrast este folosit pentru a sugera temperatura unei
                    scene sau pentru a evoca emoții specifice. De exemplu,
                    culorile calde pot evoca sentimente de căldură și confort, în
                    timp ce culorile reci pot crea o atmosferă de distanțare sau
                    melancolie.
                  </p>
                  <p>
                    Culorile calde apropie, pe când culorile reci dau impresia de
                    îndepărtare.
                  </p>
                  <p>
                    In exemplu de mai jos portocaliul este culoarea calda, iar
                    albastrul cea rece. Urmariti tranzitia.
                  </p>
                  <div
                    className="w-full h-12 rounded-lg mt-4"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #FF4500, #1E90FF)",
                    }}
                  ></div>

                  <div className="flex justify-between mt-5">
                    <div
                      className="w-2/5 h-10 rounded-lg"
                      style={{ background: "#FF4500" }}
                    ></div>
                    <div
                      className="w-2/5 h-10 rounded-lg"
                      style={{ background: "#1E90FF" }}
                    ></div>
                  </div>
                </div>
              </li>

              <li>
                <h2>Contrastul complementarelor</h2>
                <p>
                  Contribuie la dinamismul și echilibrul vizual al unei lucrări.
                  Folosirea culorilor complementare poate ajuta la crearea unui
                  focal point puternic sau la evidențierea unor elemente cheie
                  într-o pictură.
                </p>
                <p>
                  Observam ca exmplul de mai jos este un contrast cald-rece si
                  complementar.
                </p>

                <div className="flex justify-between mt-5">
                  <div
                    className="w-2/5 h-10 rounded-lg"
                    style={{ background: "#FF4500" }}
                  ></div>
                  <div
                    className="w-2/5 h-10 rounded-lg"
                    style={{ background: "#1E90FF" }}
                  ></div>
                </div>
              </li>
              <li>
                <h2>Contrastul de calitate</h2>
                <p>
                  Se referă la diferența dintre saturarea culorilor. Acesta
                  contrapune culorile viu saturate, pline de viață, cu cele pale
                  sau desaturate, care sunt apropiate de gri. Culorile mai
                  saturate sunt strălucitoare și atrag atenția, în timp ce cele
                  desaturate sunt mai subtile și mai puțin obositoare pentru ochi.
                </p>
                <p>
                  Utilizarea efectivă a acestui tip de contrast poate ajuta la
                  echilibrarea unei compoziții, oferind un punct focal puternic în
                  timp ce menține restul designului mai retras.
                </p>
                <p>
                  Exemplu: imaginați-va o imagine a unui peisaj de toamnă, unde
                  frunzele copacilor sunt reprezentate în nuanțe saturate de roșu
                  și portocaliu aprins, în timp ce fundalul este în nuanțe
                  desaturate de gri și bej. Frunzele saturate de culoare devin
                  punctul focal al imaginii, atrăgând și reținând atenția
                  privitorului, în timp ce fundalul desaturat servește ca un
                  contrast calmant, care nu concurează pentru atenție și astfel
                  completează frunzele vibrante fără a le eclipsa.
                </p>
              </li>
              <li>
                <h2>Contrastul simultan </h2>
                <p>
                  Contrastul simultan, un concept detaliat de Michel-Eugène
                  Chevreul, se referă la modul în care percepția unei culori este
                  influențată de culorile adiacente. Această influență se observă
                  puternic când culori pure și saturate sunt plasate lângă tonuri
                  neutre sau alte culori, modificându-le percepția și chiar
                  temperatura aparentă.
                </p>
                <p>
                  De exemplu, un albastru intens lângă gri poate face ca griul să
                  pară ușor gălbui, în timp ce roșul poate face culorile
                  învecinate să pară mai reci.
                </p>
                <div className="flex justify-between mt-5">
                  <div
                    className="w-3/5 h-16 "
                    style={{ background: "#0000FF" }}
                  ></div>
                  <div
                    className="w-2/5 h-16 "
                    style={{ background: "#808080" }}
                  ></div>
                </div>
              </li>

              <li>
                <h2>Contrastul de cantitate</h2>
                <p>
                  Contrastul de cantitate implică folosirea proporțiilor diferite
                  ale culorilor pentru a echilibra o compoziție.
                </p>
                <p>
                  De exemplu, o cantitate mică de roșu poate echilibra o mare
                  suprafață de tonuri pale, contribuind astfel la dinamica vizuală
                  fără a o domina. Alegerea culorilor afectează starea noastră de
                  spirit și confortul;
                </p>
                <p>
                  Exemplu: imaginați-vă o cameră cu pereții vopsiți într-un gri
                  pal și mobilier predominant alb sau bej. Pentru a sparge
                  monotonia și a adăuga dinamism spațiului, se introduce un
                  fotoliu de un roșu aprins și câteva perne decorative în aceeași
                  nuanță. Deși fotoliul ocupă o suprafață relativ mică comparativ
                  cu restul camerei, roșul său vibrant atrage imediat atenția,
                  devenind punctul focal al încăperii. Acest contrast dintre
                  suprafețele mari, pale și punctul mic, dar intens colorat, nu
                  numai că echilibrează vizual spațiul, dar adaugă și un sentiment
                  de energie și căldură.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContrastTypes;
