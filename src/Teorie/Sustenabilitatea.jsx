import ButtonsComponent from "./buttonComponents";
import apaPoluata from '../imagini/apaPoluata.jpg'
import atmosferaPoluata from '../imagini/atmosferaPoluata.webp'
import deseruriSolide from '../imagini/deseruriSolida.jpg'

import sfeclaPigment from '../imagini/sfeclaPigment.jpg'
import ecolable from '../imagini/ecolable.jpg'
import tehnologiiVerzi from '../imagini/tehnologiiVerzi.jpg'

export default function Sustenabilitatea() {
  return (
    <div class="flex h-auto">
      <div className="w-1/6 bg-gray-600 p-4 overflow-auto">
        <ButtonsComponent currentButton={8} />
      </div>
      <div className="w-5/6 p-4 flex flex-col bg-gray-100 mx-auto ">
        <div className="mx-auto px-4 py-6">
          <h1>Sustenabilitatea în Producția de Pigmenți</h1>
          <strong>
            În ultimele decenii, preocuparea pentru impactul activităților umane
            asupra mediului a crescut semnificativ. Industria culorilor, care
            include producția de pigmenți și vopsele, nu face excepție. Această
            industrie este adesea asociată cu utilizarea de substanțe chimice
            toxice și generarea de deșeuri periculoase. Prin urmare, există o
            nevoie crescută de a adopta practici mai sustenabile (prietenoase cu
            mediul încorjurător).
          </strong>

          <h2> Impactul ecologic al producției tradiționale de pigmenți </h2>
          <h3>

            Producția tradițională de pigmenți și vopsele poate avea multiple
            efecte negative asupra mediului:
          </h3>
          <p>
            Poluarea apei: Deșeurile lichide rezultate din producția de pigmenți
            pot conține metale grele și alte substanțe toxice care poluează
            cursurile de apă.
          </p>
          <p>
            Emisii în atmosferă: Solvenții și alte compuși volatili organici
            (VOCs) sunt emiși în atmosferă în timpul fabricării și aplicării
            vopselelor, contribuind la poluarea aerului.
          </p>
          <p>
            Deșeuri solide: Reziduurile solide, care includ pigmenți neutilizați
            și alte materiale, pot contribui la problema deșeurilor industriale.
          </p>
          <div className="flex w-full justify-center h-32 items-center my-4">
            <img className="w-1/4 border border-2 rounded mr-5 h-32" src={apaPoluata} alt="" />
            <img className="w-1/4 border border-2 rounded mr-5 h-32" src={atmosferaPoluata} alt="" />
            <img className="w-1/4 border border-2 rounded h-32" src={deseruriSolide} alt="" />
          </div>

          <h3>Alternative ecologice la pigmenții tradiționali</h3>
          <p>
            Există mai multe abordări pentru a reduce impactul negativ al
            industriei culorilor:{" "}
          </p>
          <p>
            Pigmenți pe bază de biologie: unii cercetători și companii au început
            să dezvolte pigmenți extrași din surse biologice, cum ar fi plantele
            și microorganismele. Acești pigmenți nu numai că sunt biodegradabili,
            dar producția lor necesită, de obicei, mai puține resurse și generează
            mai puține substanțe toxice.{" "}
          </p>
          <p>
            Tehnologiile „verzi” în producția de pigmenți implică utilizarea de
            solvenți mai puțin toxici și procese care minimizează producerea de
            deșeuri periculoase. De exemplu, utilizarea apei ca solvent în locul
            solvenților organici poate reduce semnificativ emisiile de VOCs.
          </p>
          <p>
            Reciclarea și reutilizarea pigmenților din deșeurile industriale și
            consumabile poate reduce necesitatea producției de noi materiale și
            minimiza cantitatea de deșeuri.
          </p>
          <p>
            Certificările ecologice pentru pigmenți și vopsele, cum ar fi eticheta
            „EcoLabel” a Uniunii Europene, încurajează companiile să adopte
            practici sustenabile și să producă produse mai sigure pentru mediu.
          </p>
          <div className="flex w-full justify-center h-32 items-center my-4">
            <img className="w-1/4 border border-2 rounded mr-5 h-32" src={sfeclaPigment} alt="" />
            <img className="w-1/4 border border-2 rounded mr-5 h-32" src={ecolable} alt="" />
            <img className="w-1/4 border border-2 rounded h-32" src={tehnologiiVerzi} alt="" />
          </div>
          <h3>Practici inovative care reduc poluarea</h3>
          <p>
            Optimizarea proceselor de producție pentru a reduce consumul de
            energie și materii prime.
          </p>
          <p>
            mplementarea de sisteme avansate de purificare a apei pentru a
            îndepărta contaminanții periculoși înainte de deversarea în mediul
            natural.
          </p>
          <p>
            Educația populației prin conștientizarea despre practicile sustenabile
            poate conduce la o adopție mai largă a acestor metode.
          </p>

          <h2>Concluzie</h2>
          <p>
            Adoptarea unor practici mai sustenabile în industria culorilor este
            esențială pentru a minimiza impactul negativ asupra mediului. Prin
            explorarea alternativelor ecologice, îmbunătățirea tehnologiilor și
            promovarea conștientizării, putem spera la un viitor în care culoarea
            nu vine la un cost mare pentru planeta noastră. Această transformare
            nu numai că protejează mediul, dar sprijină și sănătatea umană,
            asigurând o lume mai sigură și mai sustenabilă pentru generațiile
            viitoare.
          </p>
        </div>
      </div>
    </div>
  );
}
