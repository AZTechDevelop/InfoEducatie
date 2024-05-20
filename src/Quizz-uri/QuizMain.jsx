import { useParams } from 'react-router-dom';
import QuizDetails from './QuizDetails';
import Istoria from './Istoria.json';
import Perceptia from './Perceptia.json';
import Contrastul_in_Web_Design_si_Tehnologie from './ContrastulWeb.json';
import Contrastul_in_arta from './ContrastulArta.json';
import Durabilitatea from './Durabilitatea.json';
import Psihologia from './Psihologia.json'
import Sustenabilitatea from './Sustenabilitatea.json'
import Sistemele from './Sistemele.json'
import './quiz.css'

const quizzes = {
    istoria: Istoria,
    perceptia: Perceptia,
    psihologia: Psihologia,
    contrastul_in_web_design_si_tehnologie: Contrastul_in_Web_Design_si_Tehnologie,
    contrastul_in_arta: Contrastul_in_arta,
    durabilitatea: Durabilitatea,
    sustenabilitatea: Sustenabilitatea,
    sistemele: Sistemele,
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
            <QuizDetails quizData={quizData} className="btn" />


        </div>
    );
}

export default QMain;
