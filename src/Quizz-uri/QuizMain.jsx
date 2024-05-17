import React from 'react';
import { useParams } from 'react-router-dom';
import QuizDetails from './QuizDetails';
import Istoria from './Istoria.json';
import Perceptia from './Perceptia.json';
import Contrastul_in_Web_Design_si_Tehnologie from './ContrastulWeb.json';
import Contrastul_in_arta from './ContrastulArta.json';
import Durabilitatea from './Durabilitatea.json';
import Lectie_1 from './1.json';
import Lectie_2 from './2.json';
import Lectie_3 from './3.json';
import Lectie_4 from './4.json';

const quizzes = {
    istoria: Istoria,
    perceptia: Perceptia,
    contrastul_in_web_design_si_tehnologie: Contrastul_in_Web_Design_si_Tehnologie,
    contrastul_in_arta: Contrastul_in_arta,
    durabilitatea: Durabilitatea,
    lectie_1: Lectie_1,
    lectie_2: Lectie_2,
    lectie_3: Lectie_3,
    lectie_4: Lectie_4
};

function QMain() {
    const { quizType } = useParams(); 
    const quizData = quizzes[quizType]; 

    if (!quizData) {
        return <div>Quiz not found.</div>;
    }

    return (
        <div className='mt-5'>
            <h1>Quiz  {quizType.replace(/_/g, ' ')}</h1>
            <QuizDetails quizData={quizData} />
            

        </div>
    );
}

export default QMain;
