import React, { useState } from 'react';

function RoataCulorilorComplementare() {
    const [selectedSegment, setSelectedSegment] = useState(null);

    const colors = [
        'hsl(0, 80%, 50%)',    // Rosu
        'hsl(240, 80%, 50%)',  // Albastru
        'hsl(60, 80%, 50%)',   // Galben
        'hsl(180, 80%, 50%)',  // Turcoaz

        'hsl(120, 80%, 50%)',  // Verde (complementara rosului)
        'hsl(30, 80%, 50%)',   // Portocaliu (complementara albastrului)
        'hsl(270, 80%, 50%)',  // Violet (complementara galbenului)
     
        'hsl(330, 80%, 50%)'   // Roșu-violet (complementara turcoazului)
    ];

    const getCoordinatesForPercent = (percent) => {
        const x = Math.cos(2 * Math.PI * percent);
        const y = Math.sin(2 * Math.PI * percent);
        return [x, y];
    };

    const getPathData = (index, segments) => {
        const startPercent = index / segments;
        const endPercent = (index + 1) / segments;
        const [startX, startY] = getCoordinatesForPercent(startPercent);
        const [endX, endY] = getCoordinatesForPercent(endPercent);

        return `M 0 0 L ${startX * 16} ${startY * 16} A 16 16 0 0 1 ${endX * 16} ${endY * 16} z`;
    };

    const adjustColor = (index) => {
        if (selectedSegment !== null) {
          
            const complementIndex = (selectedSegment + 4) % 8; 
            if (index === selectedSegment || index === complementIndex) {
                return colors[index];
            }
            return 'grey';
        }
        return colors[index];
    };
    
    return (
        <div className="text-center">
           
            <svg viewBox="-18 -18 38 38" width="200px" height="200px">
                {colors.map((_, index) => (
                    <path
                        key={index}
                        d={getPathData(index, 8)}
                        fill={adjustColor(index)}
                        onClick={() => setSelectedSegment((index))}
                        style={{ cursor: 'pointer' }}
                    />
                ))}
            </svg>
            
        </div>
    );
}

export default RoataCulorilorComplementare;
