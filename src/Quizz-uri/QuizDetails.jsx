import  { useState } from 'react';

function QuizDetails({ quizData, nr }) {
    const [intrebareCurenta, setIntrebareCurenta] = useState(0);
    const [optiuniSelectate, setOptiuniSelectate] = useState([]);
    const [arataRezultate, setArataRezultate] = useState(false);

    const selecteazaOptiune = (optiune) => {
        const newOptiuniSelectate = [...optiuniSelectate];
        newOptiuniSelectate[intrebareCurenta] = optiune;
        setOptiuniSelectate(newOptiuniSelectate);

        const esteUltimaIntrebare = intrebareCurenta === quizData.length - 1;
        if (esteUltimaIntrebare) {
            setArataRezultate(true);
        } else {
            setIntrebareCurenta(intrebareCurenta + 1);
        }
    };

    const restartQuiz = () => {
        setIntrebareCurenta(0);
        setOptiuniSelectate([]);
        setArataRezultate(false);
    };

    return (
        <>
        <div className="container mx-auto p-4">
        
            {arataRezultate ? (
                <div>
                    <h1>Rezultatele Quizului</h1>
                    <p>Ai obținut {optiuniSelectate.filter((opt, index) => quizData[index].raspunsCorect === opt).length} din {quizData.length}</p>
                    <div>
                        {quizData.map((intrebare, index) => {
                            const raspunsCorect = intrebare.raspunsCorect;
                            const raspunsUtilizator = optiuniSelectate[index];
                            return raspunsUtilizator !== raspunsCorect ? (
                                <div key={index}>
                                    <p>{intrebare.intrebare}</p>
                                    <p>Răspunsul tău: {raspunsUtilizator}</p>
                                    <p>Răspuns corect: {raspunsCorect}</p>
                                </div>
                            ) : null;
                        })}
                    </div>
                    <button onClick={restartQuiz} className="ml-10 mt-5 p-4 bg-blue-500 text-white rounded hover:bg-blue-700 flex justify-center items-center">
                        Restart Quiz
                    </button>
                </div>
            ) : (
                <div>
                    <h2 className="text-center">{quizData[intrebareCurenta].intrebare}</h2>
                    <div>
                        {quizData[intrebareCurenta].optiuni.map((optiune, index) => (
                            <button key={index} onClick={() => selecteazaOptiune(optiune)} className="w-full my-2 text-blue-900 hover:bg-gray-600 hover:text-white duration-500">
                                {optiune}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
        <div>
            
        </div>
        </>
    );
}

export default QuizDetails;
