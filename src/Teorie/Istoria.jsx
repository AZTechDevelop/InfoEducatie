import ButtonsComponent from "./buttonComponents";
import "./stiluri.css";

import MonaLisa from "../imagini/MonaLisa.jpg";
import CINA from "../imagini/CINA.jpg";
import ATH from "../imagini/ATH.jpg";
import P1 from "../imagini/picturapre.jpeg";
import P2 from "../imagini/picturapre2.jpg";
import P3 from "../imagini/picturapre3.jpg";
import P4 from "../imagini/egipt1.jpg";
import P5 from "../imagini/egip2.jpg";
import P6 from "../imagini/regal.jpg";
import P7 from "../imagini/surse.webp";
import P8 from "../imagini/rel1.jpg";
import P9 from "../imagini/rel2.jpg";
import P10 from "../imagini/batik.jpg";
import P11 from "../imagini/tuk.jpg";
import P12 from "../imagini/albastru.jpeg";
import P13 from "../imagini/palet.avif";
import P14 from "../imagini/cubism.jpg";
import P15 from "../imagini/modern.jpg";

export default function Istoria() {
  return (
    <>
      <div class="flex h-auto">
        <div className="w-1/6 bg-gray-600 p-4 overflow-auto">
          <ButtonsComponent currentButton={2} />
        </div>
        <div className="w-5/6 p-4 flex flex-col bg-gray-100 mx-auto ">
          <h1 className="px-4 py-6">Istoria de Obținere a Culorilor</h1>

          <p>
            De-a lungul timpului, culorile au avut un rol important în diverse
            culturi și societăți, reprezentând un mijloc puternic de exprimare
            artistică, religioasă și socială. Tehnicile de producere a
            pigmentilor au cunoscut o dezvoltare considerabilă, trecând de la
            utilizarea simplă a substanțelor naturale la crearea coloranților
            sintetici în perioada industrială și contemporană.
          </p>
          <ol>
            <h3>Preistorie și Antichitate</h3>
            <li>
              <strong>Paleolitic: </strong> Primele dovezi ale utilizării
              culorilor în artă datează din Paleolitic, când oamenii foloseau
              pigmenți minerali cum ar fi ocru (are o culoare roșiatică),
              cărbune și hematit pentru a crea picturi rupestre vibrante care
              ilustrau vânători, animale și scene rituale.
            </li>
            <div className="flex w-full my-5">
              <img
                src={P1}
                className="h-48 w-1/3 ml-5 border-solid border-2 border-black"
              />
              <img
                src={P2}
                className="h-48 w-1/3 ml-5 border-solid border-2 border-black"
              />
              <img
                src={P3}
                className="h-48 w-1/3 ml-5 border-solid border-2 border-black"
              />
            </div>
            <li>
              <strong>Egiptul Antic: </strong> Avansările tehnologice ale
              Egiptenilor antici includ dezvoltarea albastrului egiptean și alte
              pigmenți sintetici, care erau folosiți pentru decorarea templelor
              și a mormintelor, demonstrând o înțelegere profundă a
              durabilității și strălucirii culorilor.
            </li>
            <div className="flex w-full my-5">
              <img
                src={P5}
                className="h-64 w-2/4 border-solid border-2 border-black"
              />
              <img
                src={P4}
                className="h-64 w-2/4 ml-5 border-solid border-2 border-black"
              />
            </div>
            <li>
              <strong>Grecia și Roma Antică: </strong> Greco-romanii au
              perfecționat arta pigmentilor, folosind surse locale și importate
              pentru a obține o gamă variată de culori. Pigmenții scumpi, cum ar
              fi purpura de tyr (mov), erau simboluri ale statutului și
              bogăției, fiind folosiți în vestimentație și în arta decorativă.
            </li>
            <div className="flex w-full my-5">
              <img
                src={P7}
                className="h-64 w-2/4 border-solid border-2 border-black"
              />
              <img
                src={P6}
                className="h-64 w-2/4 ml-5 border-solid border-2 border-black"
              />
            </div>
            <h3>Evul Mediu</h3>
            <div className="flex w-full my-5">
              <li className="w-4/5">
                <strong>Europa Medievală: </strong> În Evul Mediu, utilizarea
                pigmentilor a fost strâns legată de arta religioasă.
                Manuscrisele iluminate erau decorate cu culori vibrante obținute
                din surse precum ultramarinul și carminul, care erau extrem de
                valoroase și adesea controlate de către biserici.
              </li>
              <div></div>
              <img
                src={P8}
                className="h-64 w-1/5 ml-5 border-solid border-2 border-black"
              />
              <img
                src={P9}
                className="h-64 w-2/5 ml-5 border-solid border-2 border-black"
              />
            </div>

            <div className="w-full flex my-5">
              <li className="w-2/5">
                <strong>Orientul: </strong> În Orient, tehnicile avansate de
                fabricare a pigmentilor includeau utilizarea complexă a
                coloranților organici și anorganici în fabricarea cernelii,
                textilelor și ceramicii, demonstrând o cunoaștere profundă a
                chimiei naturale.
              </li>
              <div className="w-3/5 flex mt-5">
                <img
                  src={P10}
                  className="h-48 w-full mx-5 border-solid border-2 border-black"
                />
                <img
                  src={P11}
                  className="h-48 w-full mr-5 border-solid border-2 border-black"
                />
              </div>
            </div>
            <h3>Renașterea</h3>
            <p>
              Renașterea a fost un punct de cotitură în istoria utilizării și
              dezvoltării pigmenților în artă, reprezentând o perioadă în care
              intersecția dintre știință și artă a îmbogățit în mod dramatic
              paleta de culori disponibilă pentru artiști și a adus inovații în
              tehnicile de aplicare.{" "}
            </p>
            <div className="flex w-full justify-between mt-5">
              <div style={{ width: "45%" }}>
                <h3 className="text-center">Leonardo da Vinci:</h3>
                <li>
                  <strong>Tehnică: </strong>Sfumato, pentru a atenua contururile
                  și a crea tranziții subtile între culori, dând un realism unic
                  portretelor sale.
                </li>
                <li>
                  <strong>Opere reprezentative: </strong> "Mona Lisa" și "Cina
                  cea de Taină"
                </li>
              </div>
              <div style={{ width: "45%" }}>
                <h3 className="text-center">Rafael</h3>
                <li>
                  <strong>Tehnică: </strong> Armonie cromatică, a folosit culori
                  armonioase și echilibrate pentru a ilustra claritatea și
                  calmul, oferind o atmosferă de înțelepciune și serenitate.
                </li>
                <li>
                  <strong>Opere reprezentative: </strong>"Școala din Atena".
                </li>
              </div>
            </div>
            <div className="flex w-full mb-10">
              <div className="w-2/5 flex justify-between">
                <img src={MonaLisa} className=" mx-10 w-2/5 h-64" />{" "}
                <img
                  src={CINA}
                  className=" ml-5 h-64"
                  style={{ width: "55%" }}
                />
              </div>
              <iv className="w-1/5"></iv>
              <div className="w-2/5 justify-center">
                <img src={ATH} className="w-4/5 h-64" />
              </div>
            </div>
            <p>
              Alături de Leonardo da Vinci și Rafael, alți artiști renașcentiști
              precum Michelangelo, Tiziano (Titian) și Sandro Botticelli au
              contribuit și ei la acest progres.
            </p>

            <p>
              Renașterea a adus, de asemenea, progrese semnificative în
              fabricarea și procurarea pigmenților. Comerțul extins cu Orientul
              și alte regiuni a facilitat accesul la materiale exotice, cum ar
              fi lapis lazuli pentru ultramarin, considerat unul dintre cele mai
              prețioase pigmenți pentru albastru intens.{" "}
            </p>
            <p>
              {" "}
              Totodată, inovațiile tehnologice au permis măcinarea mai fină a
              pigmentilor și amestecuri mai stabile, ceea ce a îmbunătățit
              calitatea și durabilitatea vopselelor. Aceste dezvoltări au permis
              artiștilor să experimenteze cu efecte vizuale noi, să exploreze
              perspectiva și volumetria în moduri care nu fuseseră posibile până
              atunci.
            </p>

            <h3>Revoluția Industrială</h3>
            <li className="textToBg">
              <strong className="text-3xl">
                Dezvoltarea Pigmenților Sintetici:
              </strong>{" "}
              Industrializarea a adus schimbări semnificative în producția de
              pigmenți. Descoperirea și sintetizarea coloranților industriali,
              cum ar fi albastrul Prusia (culoarea textului) și mai târziu
              anilina, au revoluționat disponibilitatea și costul pigmentilor,
              făcând culorile accesibile pe scară largă.
            </li>

            <div className="w-full flex items-center">
              <div className="w-3/5">
                <h3>Secolul 20 și Modernitatea</h3>
                <li>
                  <strong>Inovații Chimice: </strong>Secolul 20 a adus progrese
                  majore în chimia organică și sintetică, culminând cu
                  dezvoltarea unei game extinse de coloranți sintetici. Aceste
                  avansuri au transformat industriile de vopsele, textile și
                  materiale plastice, oferind artiștilor și designerilor o
                  paletă practic nelimitată de culori.
                </li>
              </div>
              <img src={P13} className="w-2/5 h-48 self-center mx-auto" />
            </div>

            <div className="w-full flex items-center">
              <div className="w-3/5 mr-5">
                <li>
                  <strong>Artă Modernă și Postmodernă: </strong>Utilizarea
                  culorilor sintetice a inspirat noi direcții în arta modernă și
                  postmodernă, permitând artiștilor să exploreze forme noi de
                  expresie vizuală. Mișcări precum Impresionismul, Cubismul și
                  Artă Modernă au folosit culoarea pentru a transmite nu doar
                  imagini, ci și emoții și critici sociale.
                </li>
              </div>
              <img src={P14} className="w-2/5 h-48 self-center " />
              <img src={P15} className="w-2/5 h-48 self-center ml-5" />
            </div>
          </ol>
          <h2>Concluzie:</h2>
          <p>
            Metodele de obținere a culorilor au evoluat semnificativ de-a lungul
            istoriei, de la tehnicile primitive până la complexitatea proceselor
            moderne. Această evoluție reflectă nu doar progresele tehnologice,
            ci și schimbările în percepția și valorificarea culorii în context
            cultural și artistic.
          </p>
        </div>
      </div>
    </>
  );
}
