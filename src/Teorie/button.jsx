// Button.jsx
import React from 'react';

function Button({ onClick, children }) {
    return (
        <button 
            onClick={onClick}
            className="w-full my-2 px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none"
        >
            {children}
        </button>
    );
}

export default Button;
