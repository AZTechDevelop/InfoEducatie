import React, { useState } from "react";

function RoataCulorilorSplitComplementary() {
  const [segmentSelectat, setSegmentSelectat] = useState(null);

  // Definirea grupurilor de culori: principală + cele două adiacente
  const culori = [
    "rgb(255, 69, 0)", // redOrange
    "rgb(255, 0, 0)", // red
    "rgb(199, 21, 133)", // violet-red
    "rgb(238, 130, 238)", // violet
    "rgb(138, 43, 226)", // blue-violet
    "rgb(0, 0, 255)", // blue
    "rgb(0, 139, 139)", // blue-green
    "rgb(0, 128, 0)", // green
    "rgb(173, 255, 47)", // yellowGreen
    "rgb(255, 255, 0)", // yellow
    "rgb(255, 179, 0)", // orangeyellow
    "rgb(255, 165, 0)", // orange
  ];

  const totalSegments = culori.length;

  const calculCoordonate = (index) => {
    const angle = (index / totalSegments) * Math.PI * 2;
    const x = Math.cos(angle);
    const y = Math.sin(angle);
    return [x, y];
  };

  const getPathData = (index) => {
    const start = calculCoordonate(index);
    const end = calculCoordonate(index + 1);

    return `M0,0 L${start[0] * 16},${start[1] * 16} A16,16 0 0,1 ${end[0] * 16},${end[1] * 16}Z`;
  };

  const adjustColor = (index) => {
    if (segmentSelectat !== null) {
      const oppositeIndex = (segmentSelectat + 6) % 12; // Culoarea direct opusă
      if (
        index === segmentSelectat ||
        index === (oppositeIndex + 1) % 12 ||
        index === (oppositeIndex - 1 + 12) % 12
      ) {
        return culori[index];
      }
      return "grey";
    }
    return culori[index];
  };

  return (
    <div className="text-center">
      <svg viewBox="-18 -18 36 36" width="200px" height="200px">
        {culori.map((_, index) => (
          <path
            key={index}
            d={getPathData(index)}
            fill={adjustColor(index)}
            onClick={() => setSegmentSelectat(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </svg>
    </div>
  );
}

export default RoataCulorilorSplitComplementary;
