import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './quiz.css';
import QuizDetails from './QuizDetails';
import Istoria from './Istoria.json';
import Perceptia from './Perceptia.json';
import Contrastul_in_Web_Design_si_Tehnologie from './ContrastulWeb.json';
import Contrastul_in_arta from './ContrastulArta.json';
import Durabilitatea from './Durabilitatea.json';
import Sistemele from './Sistemele.json';
import Psihologia from './Psihologia.json';
import Sustenabilitatea from './Sustenabilitatea.json'

export default function Quiz() {
    const quizzes = {
        Istoria,
        Perceptia,
        Psihologia,
        Contrastul_in_Web_Design_si_Tehnologie,
        Contrastul_in_arta,
        Durabilitatea,
        Sustenabilitatea,
        Sistemele
       
    };

    const [clickedBubbles, setClickedBubbles] = useState([]);

    useEffect(() => {
        const rows = 15;
        const cols = 20;
        const bubbleCount = rows * cols;
        setClickedBubbles(Array(bubbleCount).fill(false));
    }, []);

    const handleBubbleClick = (index) => {
        const newClickedBubbles = [...clickedBubbles];
        newClickedBubbles[index] = !newClickedBubbles[index];
        setClickedBubbles(newClickedBubbles);
    };

    return (
        <div>
            <div className="container w-full mx-auto p-4">
                <div className="flex flex-wrap justify-center items-center gap-4 w-full">
                    {Object.keys(quizzes).map((quizName, index) => (
                        <Link to={`/quizz-uri/${quizName.replace(/\s/g, '_').toLowerCase()}`} key={index} className="w-1/4 flex justify-center">
                            <button className="w-full bg-gray-600 px-5 py-3 h-20  text-2xl rounded-lg text-white hover:bg-gray-800 duration-500">
                                {quizName.replace(/_/g, ' ')}
                            </button>
                        </Link>
                    ))}
                </div>
                <Routes>
                    {Object.keys(quizzes).map((quizName, index) => (
                        <Route 
                            path={`/quizz-uri/${quizName.replace(/\s/g, '_').toLowerCase()}`} 
                            key={index} 
                            element={<QuizDetails quizData={quizzes[quizName]} />} 
                        />
                    ))}
                </Routes>
            </div>
            <div className="bubble-wrap">
                {clickedBubbles.map((clicked, index) => (
                    <div
                        key={index}
                        className={`bubble ${clicked ? 'clicked' : ''}`}
                        onClick={() => handleBubbleClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}
