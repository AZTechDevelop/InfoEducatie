import "./acasa.css";
import "./animatii.css";
import Navigatie from "../Navigatie/baraNavigatie";
import RoataRGB from "./RoataRGB";
import RoataCulorilor from "./RoataCulorilor";
import Intro from "./Intro";
import EfectBule from "./buble";

export default function Acasa() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute w-full h-full z-0">
        <EfectBule />
      </div>
      <div className="relative z-10">
        <div className="relative z-10">
          <Navigatie />
          <Intro />
          <div className="w-full flex justify-center fade-in-delay-4">
            <RoataRGB className="w-full block m-auto" />
          </div>

          <div className="block mr-4 ml-4">
            <h1 className="mt-5  font-bold text-white mb-3 xl:text-3xl fade-in-delay-5">
              Descoperă Magia Culorilor
            </h1>
            <p className="w-full fade-in-delay-6">
              Vizualizați alături cum culorile roșu, verde și albastru se
              combină pentru a forma noi nuanțe. Acest fenomen ilustrează
              principiile de bază ale teoriei culorilor și importanța lor în
              designul vizual.
            </p>
            <p className="fade-in-delay-7">
              Culorile primare sunt roșu, verde și albastru. Acestea sunt culori
              fundamentale în teoria culorilor vizuale, pentru că nu pot fi
              obținute prin amestecarea altor culori.
            </p>
          </div>

          <div className="block lg:flex">
            <div className="block mt-5 ml-8 ">
              <p className="fade-in-delay-8">
                Ele sunt esențiale pentru crearea tuturor celorlalte culori în
                spectrul vizibil.
              </p>
              <p className="fade-in-delay-9">
                Culorile secundare sunt rezultatul amestecului a două culori
                primare. De exemplu, roșu combinat cu verde produce galben.
              </p>
              <p className="fade-in-delay-10">
                Fiecare nuanță are potențialul de a adăuga un stil distinct și
                de a influența atmosfera creațiilor dumneavoastră, permițându-vă
                să experimentați creativ.
              </p>
              <p className="fade-in-delay-11">
                Datorita industriilor numeroase, s-au creat mai multe sisteme de
                culori fiecare fiind utilizate mai mult in anumite domenii unele
                mai mult decat altele.
              </p>
              <p className="fade-in-delay-12">
                Mai multe informații la secțiunea Teoria Culorilor.
              </p>
              <p className="fade-in-delay-13">
                În cercul din partea dreaptă sunt expuse 20 dintre cele mai
                cunoscute culori, ilustrând varietatea spectrului cromatic
                disponibil.
              </p>
              <p className="fade-in-delay-14">
                Pentru a vedea o referință a mai multe coduri în diferite
                sisteme al unei culori, treceți mouse-ul peste culoarea
                respectivă sau faceți clic pe ea.
              </p>
            </div>
            <div className="fade-in-delay-15">
              <RoataCulorilor className="w-1/4 " />
            </div>
          </div>
          <div className="incheiere text-center p-5 mt-5 ">
            <h2 className="text-3xl font-bold text-white mb-4 fade-in-delay-16">
              Sunteți gata să avansați?
            </h2>
            <p className="mb-4 fade-in-delay-17">
              Pentru a continua la următoarea etapă, puteți da click pe butonul
              de mai jos sau puteți explora site-ul după bunul plac. Descoperiți
              la fiecare pas noi și fascinante aspecte ale lumii culorilor.
            </p>
            <a
              href="/teorie/introducere"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded fade-in-delay-18"
            >
              Continuați Explorarea
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
