import ButtonsComponent from "./buttonComponents";
import "./stiluri.css";
function Durabilitatea() {
  return (
    <div class="flex h-auto">
      <div className="w-1/6 bg-gray-600 p-4 overflow-auto">
        <ButtonsComponent currentButton={7} />
      </div>
      <div className="w-5/6 p-4 flex flex-col bg-gray-100 mx-auto ">
        <div className="mx-auto px-4 py-6">
        <h1>Durabilitatea Culorilor</h1>
        <p>
          {" "}
          Durabilitatea culorilor este un subiect fascinant și complex, care
          poate varia în funcție de tipul și originea pigmentelor utilizate -
          fie ele naturale sau sintetice.
        </p>
        <h2 className="text-2xl" style={{ margin: `0` }}>
          Culorile naturale, cunoscute și sub numele de pigmenti naturali, sunt
          substanțe colorante obținute din surse precum plantele, mineralele sau
          chiar uneori animalele. Exemple includ curcuma, sfecla roșie,
          spirulina, cochineal (un tip de insectă) și minerale ca ocru, cărbune.{" "}
        </h2>
        <hr />
        <h3 style={{ fontSize: `28px` }}>
          1. Durabilitatea acestor culori depinde de mai mulți factori:{" "}
        </h3>

        <div className="flex-container">
          <h4>a) Sensibilitate la lumină</h4>
          <p>
            Multe culori naturale sunt sensibile la lumină UV (fotolabile), ceea
            ce înseamnă că se pot decolora sau își pot pierde intensitatea
            atunci când sunt expuse la lumina solară sau alte surse UV. De
            exemplu, antocianii din sfecla roșie se pot decolora rapid în
            prezența luminii.
          </p>
        </div>
        <div className="flex-container">
          <h4>b) Stabilitatea termică</h4>
          <p>
            Căldura poate să afecteze culorile naturale, unii pigmenti naturali,
            cum ar fi cei din paprika, pot rezista la temperaturi moderate (până
            la 150°C) în timp ce alții, precum clorofila (până la 70°C) se
            degradează rapid la căldură.{" "}
          </p>
        </div>

        <div className="flex-container">
          <h4>c) Reacția la pH</h4>
          <p>
            pH-ul este o măsură a acidității sau alcalinității unei soluții,
            indicând concentrația de ioni de hidrogen. Valorile pH-ului variază
            de la 0 (foarte acid) la 14 (foarte alcalin), cu 7 fiind neutru.
          </p>
          <p>
            Putem să ne gândim și altfel: pH-ul este ca o scară care măsoară
            dacă ceva este acid, neutru sau bazic. Gândește-te la lămâi, care
            sunt acide și au un pH mic, apă curată care este neutru și are pH-ul
            în mijloc, și bicarbonatul de sodiu, care este bazic și are un pH
            mare.
          </p>
          <p>
            Acesta poate schimba radical culoarea unui pigment natural. De
            exemplu, pigmentul roșu din varza roșie devine roz în medii acide și
            virează spre albastru sau verde în condiții alcaline (mediu cu pH
            mai mare decât 7).{" "}
          </p>
        </div>
        <hr />
        <h3 style={{ fontSize: `28px` }}>
          2. Oxidarea și alte reacții chimice
        </h3>
        <p>
          Oxidarea este un alt factor care poate influența durabilitatea
          culorilor naturale. Acest proces chimic poate cauza modificarea
          structurii moleculare a pigmentilor, ducând la schimbări de culoare
          sau la pierderea lor completă. De exemplu, vitamina C (acid ascorbic)
          este cunoscută pentru proprietățile sale antioxidante, dar fiind
          sensibilă la oxigen, poate ușor să se oxideze, pierzându-și
          eficacitatea și culoarea.{" "}
        </p>

        <hr />
        <h3 style={{ fontSize: `28px` }}>Concluzie</h3>
        <p>
          În ciuda sensibilității lor, culorile naturale sunt preferate în multe
          aplicații datorită percepției că sunt mai sigure și mai sănătoase. Ele
          sunt folosite larg în industria alimentară, cosmetică și chiar în
          artă. Pentru a îmbunătăți durabilitatea acestor pigmenți în diferite
          aplicații, producătorii pot folosi tehnici precum microencapsularea
          sau adăugarea de antioxidanți.
        </p>
        <p>
          Deși culorile naturale pot avea o durabilitate scăzută comparativ cu
          cele sintetice, ele continuă să fie valoroase pentru diverse aplicații
          datorită apelului lor natural și perceputei lor non-toxicitate.
          Cercetările în curs de desfășurare în domeniul stabilizării și
          protecției acestor pigmenți ar putea extinde considerabil utilizările
          lor viitoare.
        </p>
      </div>
    </div>
    </div>
  );
}

export default Durabilitatea;
