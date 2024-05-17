import React, { useEffect, useState } from 'react';
import './animatii'

function BubbleEffect() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const createBubble = () => {
      const size = Math.random() * (80 - 20) + 20;
      const duration = Math.random() * (10 - 5) + 5;
      const left = Math.random() * 100;

      const newBubble = {
        id: new Date().getTime(),
        size,
        duration,
        left,
      };

      setBubbles(currentBubbles => [...currentBubbles, newBubble]);

      // Setăm un timeout pentru a elimina bulele după ce acestea au "urcat"
      setTimeout(() => {
        setBubbles(currentBubbles => 
          currentBubbles.filter(bubble => bubble.id !== newBubble.id)
        );
      }, duration * 500);

      // Continuăm să adăugăm bule noi
      setTimeout(createBubble, 1000); // Adăugăm o nouă bulă la fiecare secundă
    };

    createBubble();

    return () => {
      // La demontarea componentei, curățăm toate timeout-urile active
      setBubbles([]); // Resetăm array-ul de bule
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute bg-blue-500 rounded-full opacity-30"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: `-150px`, // Start off-screen
            animation: `rise ${bubble.duration}s linear infinite`
          }}
        />
      ))}
    </div>
  );
}

export default BubbleEffect;
