import { useEffect, useState } from "react";
import "./animatii.css";

function EfectBule() {
  const [b, setB] = useState([]);

  useEffect(() => {
    const createBubble = () => {
      const size = Math.random() * (80 - 20) + 20;
      const duration = Math.random() * (10 - 5) + 5;
      const left = Math.random() * 100;
      //dimensiunile bulei 

      const newB = {
        id: new Date().getTime(),
        size,
        duration,
        left,
      };
      //interfata bulei

      setB((currentBubbles) => [...currentBubbles, newB]);

      setTimeout(() => {
        setB((currentBubbles) =>
          currentBubbles.filter((bubble) => bubble.id !== newB.id)
        );
      }, duration * 500);

     
      setTimeout(createBubble, 1000); 
      //adauga o bula la fiecare secunda
    };

    createBubble();

    return () => {
      setB([]); 
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {b.map((bule) => (
        <div
          key={bule.id}
          className="absolute bg-blue-500 rounded-full opacity-30"
          style={{
            width: `${bule.size}px`,
            height: `${bule.size}px`,
            left: `${bule.left}%`,
            bottom: `-150px`, 
            animation: `rise ${bule.duration}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default EfectBule;
