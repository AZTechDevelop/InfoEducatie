import React, { useState, useEffect } from 'react';

function RoataMonocromaticaVariata() {
    const [selectedSegment, setSelectedSegment] = useState(null);
    const segments = 4;  
    const subSegments = 3;  
    const colors = [
        //Regula e deschis, mediu, inchis
        // Nuanțe de roșu
        'hsl(0, 90%, 60%)',  
        'hsl(0, 90%, 50%)',  
        'hsl(0, 90%, 40%)',  
    
        // Nuanțe de albastru
        'hsl(240, 90%, 60%)',  
        'hsl(240, 90%, 50%)',  
        'hsl(240, 90%, 40%)',  
    
        // Nuanțe de verde
        'hsl(120, 60%, 60%)',  
        'hsl(120, 60%, 50%)',  
        'hsl(120, 60%, 40%)',  
    
        // Nuanțe de mov
        'hsl(300, 60%, 70%)',  
        'hsl(300, 60%, 60%)',  
        'hsl(300, 60%, 50%)'  
    ];
    
    useEffect(() => {
        // Selectam un segment aleatoriu
        setSelectedSegment(Math.floor(Math.random() * segments));
    }, []);

    const getCoordinatesForPercent = (percent) => {
        const x = Math.cos(2 * Math.PI * percent);
        const y = Math.sin(2 * Math.PI * percent);
        return [x, y];
    };

    const getPathData = (index, subIndex) => {
        const totalSubSegments = segments * subSegments;
        const startPercent = (index * subSegments + subIndex) / totalSubSegments;
        const endPercent = (index * subSegments + subIndex + 1) / totalSubSegments;
        const [startX, startY] = getCoordinatesForPercent(startPercent);
        const [endX, endY] = getCoordinatesForPercent(endPercent);

        return `M 0 0 L ${startX * 16} ${startY * 16} A 16 16 0 0 1 ${endX * 16} ${endY * 16} z`;
    };

    const adjustColor = (color, index) => {
        if (selectedSegment === index) {
            
            return color;
        } else {
           
            return 'grey';
        }
    };

    return (
        <div>
          
            <svg viewBox="-18 -18 36 36" width="200px" height="200px">
                {Array.from({ length: segments }).map((_, index) => (
                    Array.from({ length: subSegments }).map((_, subIndex) => (
                        <path
                            key={`${index}-${subIndex}`}
                            d={getPathData(index, subIndex)}
                            fill={adjustColor(colors[index * subSegments + subIndex], index)}
                            onClick={() => setSelectedSegment(index)}
                            style={{ cursor: 'pointer' }}
                        />
                    ))
                ))}
            </svg>
        
        </div>
    );
}

export default RoataMonocromaticaVariata;
