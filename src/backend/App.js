import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Joc from '../Joc/joc';
import Acasa from '../Acasa/acasa';
import Laborator from '../Paleta/Paleta';
import Quiz from '../Quizz-uri/quiz';
import ConditionalNav from '../Navigatie/navigareConditionata'; 



import '../index.css';

import Introducere from '../Teorie/Introducere';
import Istoria from '../Teorie/Istoria';
import Psihologia from '../Teorie/Psihologia'
import Perceptia from '../Teorie/Perceptia'
import ContrastulInWebDesign from '../Teorie/ContrastulWebDesign'
import ContrastulInArta from '../Teorie/ContrastulInArta';
import DurabilitateaCulorilor from '../Teorie/Durabilitatea';
import Sustenabilitatea from '../Teorie/Sustenabilitatea';
import Sistemele from '../Teorie/Sistemele'

import QMain from '../Quizz-uri/QuizMain'

import Cont from '../Cont/cont'
import Logat from '../Cont/logat';


function App() {
  return (
    <>
      
    <Router>
      
      <ConditionalNav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Acasa />} />
          <Route path="/joc" element={<Joc />} />
         
          <Route path="/paleta" element={<Laborator />} />
          <Route path="/quizz-uri" element={<Quiz />} />

          <Route path="/cont" element={<Cont />} />
          <Route path="/logat" element={<Logat />} />
      

        <Route path="/teorie/introducere" element={<Introducere />} />
        <Route path="/teorie/istoria" element={<Istoria />} />
        <Route path="/teorie/perceptia" element={<Perceptia />} />
        <Route path="/teorie/psihologia" element={<Psihologia />} />
        <Route path="/teorie/psihologie" element={<Perceptia />} />
        <Route path="/teorie/contrastul-in-web-design" element={<ContrastulInWebDesign />} />
        <Route path="/teorie/contrastul-in-arta" element={<ContrastulInArta />} />
        <Route path="/teorie/durabilitatea" element={<DurabilitateaCulorilor />} />
        <Route path="/teorie/sustenabilitatea" element={<Sustenabilitatea />} />
        <Route path="/teorie/sistemele" element={<Sistemele />} />
      
        
        <Route path="/quizz-uri/:quizType" element={<QMain />} />


  
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
