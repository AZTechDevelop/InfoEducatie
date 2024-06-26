import { useState, useEffect } from 'react';

const gradiente = [
  'linear-gradient(45deg, red, yellow, red)',
  'linear-gradient(45deg, green, pink, green)',
  'linear-gradient(45deg, orange, purple, orange)',
  'linear-gradient(45deg, blue, cyan, blue)',
  'linear-gradient(45deg, magenta, yellow, magenta)',
  'linear-gradient(45deg, lime, blue, lime)',
  'linear-gradient(45deg, navy, teal, navy)',
  'linear-gradient(45deg, silver, gray, silver)',
  'linear-gradient(45deg, olive, maroon, olive)',
  'linear-gradient(45deg, aqua, fuchsia, aqua)',
  'linear-gradient(45deg, chocolate, coral, chocolate)',
  'linear-gradient(45deg, darkorange, gold, darkorange)',
  'linear-gradient(45deg, darkorchid, lavender, darkorchid)',
  'linear-gradient(45deg, deeppink, lightpink, deeppink)',
  'linear-gradient(45deg, dodgerblue, lightblue, dodgerblue)',
  'linear-gradient(45deg, firebrick, salmon, firebrick)',
  'linear-gradient(45deg, gold, khaki, gold)',
  'linear-gradient(45deg, indigo, violet, indigo)',
  'linear-gradient(45deg, limegreen, palegreen, limegreen)',
  'linear-gradient(45deg, midnightblue, skyblue, midnightblue)',
];

function Efect() {
  const [grade, setGrade] = useState('');

  useEffect(() => {
    const schimbaGradiente = () => {
      const indexAleatoriu = Math.floor(Math.random() * gradiente.length);
      setGrade(gradiente[indexAleatoriu]);
    };

    const idInterval = setInterval(schimbaGradiente, 1000);
    return () => clearInterval(idInterval);
  }, []);


  return (
    <h1 className="title flex text-center" style={{ backgroundImage: grade, width: '100%' }}>Ghiceste Culoarea</h1>
  );
}

export default Efect;
