import React from 'react';

import Titlu from './animatii'

const HomeIntro = () => {
  return (
    <div className="text-center p-5">
        <Titlu />
     
      <p className="fade-in-delay-1">
        Explorați lumea vibrantă a culorilor și descoperiți cum să le folosiți eficient.
      </p>
      <p className="fade-in-delay-2">
        Acest site este dedicat copiilor, web designerilor, designerilor grafici și oricui este interesat să învețe mai multe despre culori. 
        Indiferent dacă sunteți un profesionist în căutarea inspirației sau un începător care dorește să înțeleagă bazele teoriei culorilor, 
        aici veți găsi resurse utile pentru a vă extinde cunoștințele și abilitățile.
      </p>
      <p className="fade-in-delay-3">
        Învățați <strong className='text-white'>Teoria Culorilor</strong>, 
        unde  puteți aprofunda aspectele teoretice ale culorilor. Creati-vă palete personalizate la secțiunea <strong className='text-white'>Palete</strong> 
         cum se schimbă culorile în funcție de diferite valori, și testați-vă cunoștințele cu <strong className='text-white'>Quizz-uri</strong> 
         care vă vor provoca să demonstrați ce ați învățat. Sau puteți să vă testați abilitățile cu jocul nostru interactiv bazat pe recunoașterea culorilor la secțiunea <strong className='text-white'>Joc.</strong>
         </p>
    </div>
  );
};

export default HomeIntro;
