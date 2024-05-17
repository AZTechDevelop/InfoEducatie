import React, { useState, useEffect } from "react";

function RoataCulorilorAnaloge() {
  const [selectedSegment, setSelectedSegment] = useState(null);
  const segments = 12;

  useEffect(() => {
    setSelectedSegment(Math.floor(Math.random() * 4) * 3);
  }, []);

  const colors = [
    "hsl(345, 80%, 50%)",
    "hsl(0, 80%, 50%)",
    "hsl(15, 80%, 50%)",

    "hsl(215, 80%, 50%)",
    "hsl(240, 80%, 50%)",
    "hsl(265, 80%, 50%)",

    "hsl(95, 80%, 50%)",
    "hsl(120, 80%, 50%)",
    "hsl(145, 80%, 50%)",

    "hsl(285, 80%, 50%)",
    "hsl(300, 60%, 50%)",
    "hsl(315, 80%, 50%)",
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

  const adjustColor = (color, index) => {
    const groupStartIndex = Math.floor(selectedSegment / 3) * 3;
    if (index >= groupStartIndex && index < groupStartIndex + 3) {
      return color;
    } else {
      return "grey";
    }
  };

  return (
    <div className="text-center">
      <svg viewBox="-18 -18 36 36" width="200px" height="200px">
        {colors.map((color, index) => (
          <path
            key={index}
            d={getPathData(index, segments)}
            fill={adjustColor(color, index)}
            onClick={() => setSelectedSegment(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </svg>
    </div>
  );
}

export default RoataCulorilorAnaloge;
