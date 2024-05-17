import { useState } from 'react';

const RoataDublaComplementara = () => {
  const culori = [
    "rgb(255, 69, 0)",    // redOrange
    "rgb(255, 0, 0)",     // red
    "rgb(199, 21, 133)",  // violet-red
    "rgb(238, 130, 238)", // violet
    "rgb(138, 43, 226)",  // blue-violet
    "rgb(0, 0, 255)",     // blue
    "rgb(0, 139, 139)",   // blue-green
    "rgb(0, 128, 0)",     // green
    "rgb(173, 255, 47)",  // yellowGreen
    "rgb(255, 255, 0)",   // yellow
    "rgb(255, 179, 0)",   // orangeyellow
    "rgb(255, 165, 0)",   // orange
  ];

  const [selectedColorIndex, setSelectedColorIndex] = useState(null);

  const radius = 150;
  const cx = 200;
  const cy = 200;

  const getCoordinatesForAngle = (angle, radius) => {
    let rad = (angle * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(rad),
      y: cy + radius * Math.sin(rad)
    };
  };

  const getPathData = (index, total, radius) => {
    const angle = 360 / total;
    const startAngle = angle * index;
    const endAngle = startAngle + angle;
    const largeArc = angle > 180 ? 1 : 0;

    const start = getCoordinatesForAngle(startAngle, radius);
    const end = getCoordinatesForAngle(endAngle, radius);

    return `M${cx},${cy} L${start.x},${start.y} A${radius},${radius} 0 ${largeArc},1 ${end.x},${end.y} Z`;
  };

  const handleClick = index => {
    setSelectedColorIndex(index);
  };

  const getFillColor = (index) => {
    if (selectedColorIndex === null) return culori[index];
    const totalColors = culori.length;
    const complement1 = (selectedColorIndex + totalColors / 2) % totalColors;
    const complement2 = (selectedColorIndex + totalColors / 4) % totalColors;
    const complement3 = (selectedColorIndex + 3 * totalColors / 4) % totalColors;
    if ([selectedColorIndex, complement1, complement2, complement3].includes(index)) {
      return culori[index];
    }
    return 'grey'; // Non-selected colors are greyed out
  };

  return (
    <svg width="350" height="350" viewBox="0 0 350 350">
      {culori.map((_, index) => (
        <path
          key={index}
          d={getPathData(index, culori.length, radius)}
          fill={getFillColor(index)}
          onClick={() => handleClick(index)}
        />
      ))}
    </svg>
  );
};

export default RoataDublaComplementara;
