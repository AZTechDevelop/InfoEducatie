import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonsComponent({ currentButton }) {
    const navigate = useNavigate();

    const numeButoane = [
        'Introducere',
        "Istoria",
        "Perceptia",
        'Psihologia',
        'Contrastul in Web Design si Tehnologie',
        'Contrastul in arta',
        'Durabilitatea',
        'Sustenabilitatea',
        'Sistemele de Culori'
    ];

    const handleButtonClick = (buttonNumber) => {

         if (buttonNumber === 1) {
            navigate('/teorie/introducere');
        } 
        else if(buttonNumber === 2){
            navigate('/teorie/istoria')
        }else if (buttonNumber === 3) {
            navigate('/teorie/perceptia');
        } else if (buttonNumber === 4) {
            navigate('/teorie/psihologia');
        }
        else if(buttonNumber === 5){
            navigate('/teorie/armonia')
        }
        else if(buttonNumber === 6){
            navigate('/teorie/constrastulsibalanta')
        }
        else if(buttonNumber === 7){
        navigate('/teorie/durabilitatea')
        }
        else if(buttonNumber === 8){
            navigate('/teorie/sustenabilitatea')
        }
        else{
            navigate('/teorie/sistemele')
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full">
            {numeButoane.map((nume, index) => {
                const buttonNumber = index + 1;
                
                return (
                    <button
                        key={buttonNumber}
                        onClick={() => handleButtonClick(buttonNumber)}
                        className={`w-full my-1 py-2 text-sm font-medium text-white rounded transition-colors duration-200
                                    ${currentButton === buttonNumber ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'}
                                    focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50`}
                    >
                        {nume}
                    </button>
                );
            })}
        </div>
    );
}

export default ButtonsComponent;
