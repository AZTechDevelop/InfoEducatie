import ButtonsComponent from "./buttonComponents";
import Blue from "../imagini/blue.jpeg";
import CocaCola from "../imagini/CocaCola.png";
import Facebook from "../imagini/FacebookLogo.png";
import St from "../imagini/StarbucksLogo.jpeg";
import Mc from "../imagini/MC.png";
import Hal from "../imagini/Hal.png";
import RF from "../imagini/RedFuneral.jpg";
import Red from "../imagini/Red.jpeg";
import NI from "../imagini/NI.jpeg";
import WK from "../imagini/WK.jpeg";
import Spa from "../imagini/Spa.jpeg";
import CF from "../imagini/CF.jpg";
import "./stiluri.css";
function Perceptia() {
  return (
    <>
      <div class="flex h-auto">
        <div className="w-1/6 bg-gray-600 p-4 overflow-auto">
          <ButtonsComponent currentButton={4} />
        </div>
        <div className="w-5/6 p-4 flex flex-col bg-gray-100">
          <div className=" mx-auto px-4 py-6">
            <h1>Psihologia Culorilor</h1>

            <h2>Influența Emoțională a Culorilor</h2>
            <p>
              Culorile nu doar că înfrumusețează lumea, dar au și un impact
              profund asupra modului în care ne simțim. De exemplu, nuanțele de{" "}
              <label className="text-red-600">
                roșu sunt adesea percepute ca fiind energizante și pot stimula
                sentimente de pasiune și urgență.{" "}
              </label>{" "}
            </p>
            <p className="text-blue-600">
              În contrast, albastrul este recunoscut pentru efectul său calmant
              și este frecvent utilizat în spații destinate relaxării sau
              meditației.
            </p>
            <p className="text-green-600">
              Verdele, culoarea naturii, este cel mai odihnitor pentru ochiul
              uman și promovează o stare de calm și siguranță.
            </p>
            <p className="text-yellow-600">
              Galbenul este luminos și energizant, asociat adesea cu fericirea
              și optimismul.
            </p>

            <p className="text-orange-600">
              Portocaliu este adesea perceput ca o culoare călduroasă și
              prietenoasă.{" "}
            </p>
            <p className="text-pink-600">
              Rozul simbolizează afectivitatea, sensibilitatea și liniștea. Are
              capacitatea de a calma și îmbunătăți sentimentele unei persoane.
            </p>
            <p className="bg-gray-400 rounded-lg text-white">
              Alb este simbolul clarității, purității și începutului nou, adesea
              folosit pentru a evoca simplitatea și inocența.
            </p>
            <p>
              Negrul simbolizează sobrietatea și seriozitatea, fiind o culoare
              formală ce inspiră putere.
            </p>

            <h2>Culorile în Marketing</h2>
            <p>
              Culorile joacă un rol crucial în branding și marketing, deoarece
              influențează percepția și deciziile consumatorilor.{" "}
            </p>
            <p>
              Un brand care utilizează roșu în logo și în campaniile sale poate
              să fie perceput ca dinamic și energic.
            </p>

            <p>
              Companiile care aleg albastrul ca element central al identității
              vizuale tind să fie asociate cu profesionalismul și încrederea.
            </p>
            <p>
              Galbenul este adesea folosit pentru a atrage atenția
              consumatorilor în locuri de vânzare, deoarece este una dintre cele
              mai vizibile culori din distanță.
            </p>
            <p>
              Verdele este preferat de brandurile care doresc să sublinieze
              valori precum sustenabilitatea și responsabilitatea ecologică.
            </p>
            <p>
              Portocaliul poate stimula apetitul, motiv pentru care este
              frecvent folosit în restaurante și în alte spații alimentare.
            </p>
            <p>
              {" "}
              Movul este folosit pentru a inspira respect și adorație și este
              adesea văzut în branding-ul produselor de lux sau de înaltă
              calitate.{" "}
            </p>
            <p>
              Griul este adesea folosit în brandurile care doresc să transmită
              seriozitate și sobrietate.
            </p>
            <div className="flex w-full m-auto h-auto justify-center items-center bg-white py-2 my-1">
              <img className="w-1/5 h-48" src={CocaCola} alt="Logo CocaCola" />
              <img className="w-1/5 h-48" src={Mc} alt="Logo McDonald" />
              <img className="w-1/4 h-48" src={Hal} alt="Logo HallMark" />
              <img className="w-1/5 h-32" src={Facebook} alt="Logo Facebook" />
              <img className="w-1/4 h-48" src={St} alt="Logo Starbucks" />
            </div>

            <h2>Impactul Cultural al Culorilor</h2>
            <p>
              Percepția culorilor variază semnificativ în funcție de cultură. De
              exemplu, în multe culturi estice, alb este culoarea doliului, în
              timp ce în Occident este asociată cu puritatea și nunțile.
            </p>
            <p>
              Rosul poate semnifica noroc și prosperitate în China, pe când în
              Africa de Sud este culoarea doliului.
            </p>
            <p>
              Înțelegerea acestor diferențe culturale este esențială pentru
              comunicarea și marketingul internațional.
            </p>
            <p>
              Companiile multinaționale trebuie să adapteze paleta de culori
              folosită în campanii pentru a se asigura că mesajele lor sunt
              interpretate corect în diversele piețe globale.
            </p>
            <div className="flex w-full m-auto h-auto justify-center items-center bg-white py-2 my-1">
              <img
                className="w-2/5 h-48 mr-8"
                src={RF}
                alt="Inmormantare in Africa de Sud"
              />
              <img className="w-2/5 h-48" src={Red} alt="Celebrare in China" />
            </div>

            <h2>Simbolismul Culorilor în Artă și Design</h2>
            <p>
              În artă, culorile sunt folosite nu doar pentru a descrie
              realitatea vizuală, ci și pentru a transmite emoții și mesaje
              simbolice.
            </p>
            <p>
              Artiștii folosesc culori calde pentru a exprima pasiune sau
              agitație, în timp ce culorile reci pot evoca liniște sau tristețe.
            </p>
            <p>
              Designerii de interior folosesc culorile pentru a crea anumite
              stări în spațiile pe care le amenajează, influențând modul în care
              aceste spații sunt percepute și trăite de utilizatori.
            </p>
            <p>
              Cunoașterea profundă a efectelor culorilor poate transforma un
              proiect simplu într-o operă de artă complexă și profundă, fie că
              este vorba de un tablou, un film, o fotografie sau un design
              interior.
            </p>
            <p>
              Griul este neutru și echilibrat. Este ideal pentru fundaluri în
              design deoarece nu distrag atenția și oferă o bază stabilă pentru
              alte culori.
            </p>
            <div className="flex w-full m-auto h-auto justify-center items-center bg-white py-5 my-4">
              <img
                className="w-1/5 h-48 mr-8"
                src={NI}
                alt="Noapte Instelata de Vincent Van Gogh"
              />
              <img className="w-1/5 h-48 mr-8" src={Spa} alt="Spa" />
              <img
                className="w-1/5 h-48 mr-8"
                src={WK}
                alt="Pictura Wassily Kandinsky "
              />
              <img className="w-1/5 h-48 mr-8" src={CF} alt="Cafenea" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Perceptia;
