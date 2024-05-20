import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./quiz.css";
import QuizDetails from "./QuizDetails";
import Istoria from "./Istoria.json";
import Perceptia from "./Perceptia.json";
import Contrastul_in_Web_Design_si_Tehnologie from "./ContrastulWeb.json";
import Contrastul_in_arta from "./ContrastulArta.json";
import Durabilitatea from "./Durabilitatea.json";
import Psihologia from "./Psihologia.json";
import Sustenabilitatea from "./Sustenabilitatea.json";
import Sistemele from "./Sistemele.json";
import EfectBule from "../Acasa/buble";
import '../Acasa/animatii.css'
export default function Quiz() {
  const quizzes = {
    Istoria,
    Perceptia,
    Psihologia,
    Contrastul_in_Web_Design_si_Tehnologie,
    Contrastul_in_arta,
    Durabilitatea,
    Sustenabilitatea,
    Sistemele,
  };




  return (

    <div >
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute w-full h-full z-0">
          <EfectBule />
        </div>
        <div className="container w-full mx-auto p-4">
          <div className="flex flex-wrap justify-center items-center gap-4 w-full">
            {Object.keys(quizzes).map((quizName, index) => (
              <Link
                to={`/quizz-uri/${quizName.replace(/\s/g, "_").toLowerCase()}`}
                key={index}
                className="w-full sm:w-full md:w-1/2 lg:w-1/3 flex justify-center"
              >
                <button
                  className="w-full bg-gray-600 px-5 py-3 h-auto text-2xl rounded-lg text-white 
                        hover:bg-gray-800 duration-500 flex items-center justify-center text-center
                        break-words whitespace-normal
                        text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                >
                  {quizName.replace(/_/g, " ")}
                </button>
              </Link>
            ))}
          </div>
          <Routes>
            {Object.keys(quizzes).map((quizName, index) => (
              <Route
                path={`/quizz-uri/${quizName.replace(/\s/g, "_").toLowerCase()}`}
                key={index}
                element={<QuizDetails quizData={quizzes[quizName]} />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
}
