import React, { useState, useEffect } from 'react';
import Effect from './efect';
import './joc.css';

function Joc() {
    const [isOverVisible, setIsOverVisible] = useState(false);
    const [score, setScore] = useState(5);
    const [correctCounter, setCorrectCounter] = useState(0);
    const [numSquares, setNumSquares] = useState(4);
    const [colors, setColors] = useState([]);
    const [pickedColor, setPickedColor] = useState("");
    const [bestScore, setBestScore] = useState(0);
    const [difficulty, setDifficulty] = useState(4);
   

    useEffect(() => {
        resetGame();
    }, [numSquares]);

    const genRandomColors = (num) => {
        let arr = [];
        for (let i = 0; i < num; i++) {
            arr.push(randomColor());
        }
        return arr;
    };

    const randomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    };

    const handleSquareClick = (color, index) => {
        if (color === pickedColor) {
            setCorrectCounter(prev => prev + 1);
            setBestScore(prev => Math.max(prev, correctCounter + 1));
            reset(); 
        } else {
            setScore(prev => prev - 1);
            setColors(prevColors => prevColors.map((item, idx) => 
                idx === index ? 'black' : item
            ));
            if (score - 1 === 0) {
                resetGame();
                setIsOverVisible(true);
            }
        }
    };

    const resetGame = () => {
        const newColors = genRandomColors(numSquares);
        const newPickedColor = newColors[Math.floor(Math.random() * newColors.length)];
        setColors(newColors);
        setPickedColor(newPickedColor);
        setIsOverVisible(false);
        setScore(5);
        setCorrectCounter(0);
    };

    const reset = () => {
        const newColors = genRandomColors(numSquares);
        const newPickedColor = chooseColor(newColors);
        setColors(newColors);
        setPickedColor(newPickedColor);
    };

    const chooseColor = (colors) => {
        const random = Math.floor(Math.random() * colors.length);
        return colors[random];
    };

    const changeDifficulty = (newDifficulty) => {
        setNumSquares(newDifficulty);
        setDifficulty(newDifficulty); 
        reset();
    };

    return (
        <>
            {isOverVisible && (
                <div id="over">
                    <h1 id="finalScoreF">Scor final: {correctCounter}</h1>
                    <h1 id="finalBestScoreF">Cel mai bun scor: {bestScore}</h1>
                    <button id="playAgain" onClick={() => setIsOverVisible(false)}>Joacă din nou</button>
                </div>
            )}

            <div id="stripe0" className='w-full flex'>
                <Effect className="w-2/5" />
                <div className='w-3/5 flex justify-between'>
                    <button className={`mode bg-gray-600 mx-4 ${difficulty === 2 ? 'selected' : ''}`} onClick={() => changeDifficulty(2)}>Usor</button>
                    <button className={`mode bg-gray-600 mx-4 ${difficulty === 4 ? 'selected' : ''}`} onClick={() => changeDifficulty(4)}>Normal</button>
                    <button className={`mode bg-gray-600 mx-4 ${difficulty === 6 ? 'selected' : ''}`} onClick={() => changeDifficulty(6)}>Greu</button>
                </div>
            </div>

            <div className="infoList">
                <label className="infoItem py-2" style={{color: 'rgb(239 68 68)'}}>Vieti: {score}</label>
                <label className="infoItem py-2" style={{color: 'rgb(234 179 8)'}}>Scor Actual: {correctCounter}</label>
                <label className="infoItem py-2" style={{color:'rgb(59 130 246)'}}>Cel Mai Bun Scor: {bestScore}</label>
            </div>

            <span id="color-display">{pickedColor}</span>

            <div id="container">
                {colors.map((color, index) => (
                    <div key={index} className="square" style={{ backgroundColor: color, transition: 'all 0.4s ease' }} onClick={() => handleSquareClick(color, index)}></div>
                ))}
            </div>
        </>
    );
}

export default Joc;
