import React from 'react';
import ButtonsComponent from './buttonComponents';
import RoataCulorilor from './componente/RoataCulorilor';
import RoataMonocromatica from './componente/RoataMonocromatica';
import RoataAnaloaga from './componente/RoataAnaloaga'
import RoataComplementara from './componente/RoataComplementara'
import RoataComplementaraImpartita from './componente/RoataComplementaraImpartita'
import RoataPatrat from './componente/RoataPatrat'
import RoataDublaComplementara from './componente/RoataDublaComplementara';

import './stiluri.css'
function ArmoniaCulorilor() {
  return (
    <>
     <div class="flex h-auto">
         <div className="w-1/6 bg-gray-600 p-4 overflow-auto">
                <ButtonsComponent currentButton={5} />
            </div>
            <div className="w-5/6 p-4 flex flex-col bg-gray-100 mx-auto px-4 py-6">
   
      <h1>Contrastul in Web Design si Tehnologie</h1>
      <p className='text-center mb-5 text-3xl'>
                 Principalele categorii în care se împart culorile:
            </p>
      <div className="flex">
      
      <div>
      <ol className="list-decimal list-inside">
      <div className='w-full flex m-auto'>
                <div>
                <p className='w-full'>În sistemul de culori aditiv (lumină), cum ar fi cel utilizat pentru ecranele digitale: roșu, verde, albastru</p>
                <li><strong>Culori Primare:</strong> Sunt culorile de bază din care se pot obține toate celelalte culori prin amestecare. </li>
              
               
                <li className='w-full'><strong>Culori Secundare:</strong> Obținute prin combinarea culorilor primare: portocaliu (roșu + galben), verde (albastru + galben), violet (roșu + albastru).</li>
                <li className='w-full'><strong>Culori Terțiare:</strong> Rezultă din combinarea unei culori primare cu una secundară adiacentă pe roata culorilor, cum ar fi roșu-portocaliu sau albastru-verde.</li>
                </div>
                <div className='w-2/5'>  <RoataCulorilor /></div>
                </div>
               
                   
            
                
                 
            </ol>
            <ol className="list-decimal list-inside">
            <li><strong>Culori Calde:</strong> Acestea includ culori precum roșu, portocaliu și galben, care evocă energie, pasiune și căldură.</li>
                <li><strong>Culori Reci:</strong> Cuprind culori precum albastru, verde și violet, asociate cu calmul, relaxarea și serenitatea.</li>
                </ol>
                </div>
      </div>
            <h2 >Tipuri de Armonie a Culorilor</h2>
            <ul className="list-disc list-inside">
                <div className='flex'>
                    <div>
                <li><strong>Monocromatică:</strong> Folosește diferite tonuri, umbre și intensități ale aceleiași culori pentru a crea o schemă simplă și unitară.</li>

                <p className="mt-4">Selectați un segment pentru a vedea nuanțele diferite ale aceleiași culori. Restul segmentelor vor deveni gri.</p>
                </div>
                <RoataMonocromatica />
                </div>
                <hr />

                <div className='flex'>
                    <div>
                <li><strong>Analoage:</strong> Combină trei sau mai multe culori adiacente pe roata culorilor, cum ar fi albastru, albastru-verde și verde.</li>
                <p>Folosirea acestor culori împreună în design creează un efect vizual liniștitor și plăcut, oferind coerență și continuitate vizuală.</p>
                <p className="mt-4">Selectați un grup de nuanțe pentru a ilustra diferențele dintre ele.</p>
                </div>
                <RoataAnaloaga />
                </div>
                <hr />
                <div className='flex'> 
                <div>
                <li><strong>Complementare:</strong> Utilizează culori situate direct opus pe roata culorilor.</li>
                <p>Daca se elimina rosul si se combina albastrul cu galben, se formeaza verde. Asadar, verde devine culoarea complementara pentru rosu. Pentru albastru, culoarea complementara este portocaliu (combinatia dintre galben + rosu). 
                    Din rosu si albastru se obtine violet, ceea ce inseamna ca movul este culoarea complementara a galbenului.</p>
                <p className="mt-4">Selectați o culoare pentru a evidenția aceasta și culoarea sa complementară. Restul vor deveni gri.</p>
                  </div>
                  <RoataComplementara />
                </div>
                <hr />
                <div className='flex'>
                    <div>
                <li><strong>Complementare „impartite”:</strong> Alege o culoare principală și combină-o cu cele două culori adiacente opusului său direct, pentru un efect vizual electrizant.</li>
                       <p className="mt-4">Selectați o culoare pentru a evidenția aceasta și cele două adiacente. Restul vor deveni gri.</p>
                    </div>
                    <RoataComplementaraImpartita />
                </div>
                <hr />
                <div className='flex'>

                    <div className='w-4/5'>
                <li><strong>Dubla Complementaritate:</strong> Împerechează două seturi de culori complementare, formând un X pe roata culorilor, cum ar fi roșu + portocaliu cu cyan + verde.</li>
               <p> De exemplu, într-un poster, roșul și portocaliul roșiatic pot fi folosite pentru elementele principale sau pentru a atrage atenția, în timp ce cyanul și verdele  pot servi ca fundal sau ca elemente secundare, 
                oferind un contrast puternic care facilitează citirea și impactul vizual.</p>
              
            
                </div>
                <RoataDublaComplementara />
                </div>
                <hr />
                <div className='flex'>
                    <div className='w-4/5'>
                <li><strong>Culori în Patrat sau Dreptunghi:</strong> Selectează patru culori care sunt echidistante pe roata culorilor, formând un patrat sau un dreptunghi.</li>
                <p>Această tehnică este adesea utilizată în designul grafic și interior pentru a crea scheme de culori vibrante și pline de energie, 
                    care pot captiva și menține interesul vizual al spectatorului.

</p>
                </div>
                <RoataPatrat />
                </div>
                <hr />

                <div className='flex'>
                    <div>
                <li><strong>Diada:</strong> Combină două culori care sunt separate de o altă culoare pe roata culorilor, creând un echilibru simplu dar eficace.</li>
                </div>
               
                </div>
                <li><strong>Triada:</strong> Alege trei culori care sunt la distanțe egale pe roata culorilor, formând un trunghi, cum ar fi roșu, galben și albastru.</li>
            </ul>

            <p>Implementarea acestor scheme de culori poate transforma orice spațiu, conferindu-i o atmosferă armonioasă și plăcută vizual.</p>
        </div>

    </div>
    </>
  );
}

export default ArmoniaCulorilor;
