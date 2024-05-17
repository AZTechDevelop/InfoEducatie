import React, { useState } from 'react';

function rgbToXYZ(r, g, b) {
    r = r / 255;
    g = g / 255;
    b = b / 255;

    // Corecție gamma (sRGB)
    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

    // Conversia folosind matricea sRGB
    const x = (r * 0.4124564 + g * 0.3575761 + b * 0.1804375) * 100;
    const y = (r * 0.2126729 + g * 0.7151522 + b * 0.0721750) * 100;
    const z = (r * 0.0193339 + g * 0.1191920 + b * 0.9503041) * 100;

    return [x.toFixed(2), y.toFixed(2), z.toFixed(2)]; // Formatarea la două zecimale
}

function xyzToCIELAB(x, y, z) {
    // Punctul alb de referință D65
    let xr = x / 95.047;
    let yr = y / 100.000;
    let zr = z / 108.883;

    xr = xr > 0.008856 ? Math.pow(xr, 1/3) : (7.787 * xr) + (16 / 116);
    yr = yr > 0.008856 ? Math.pow(yr, 1/3) : (7.787 * yr) + (16 / 116);
    zr = zr > 0.008856 ? Math.pow(zr, 1/3) : (7.787 * zr) + (16 / 116);

    const l = (116 * yr) - 16;
    const a = 500 * (xr - yr);
    const b = 200 * (yr - zr);

    return `CIE LAB(${l.toFixed(2)}, ${a.toFixed(2)}, ${b.toFixed(2)})`;
}

function rgbToCIELAB(r, g, b) {
    const [x, y, z] = rgbToXYZ(r, g, b);
    return xyzToCIELAB(x, y, z);
}

const ColorWheel = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [hoverColorInfo, setHoverColorInfo] = useState('');
  const colors = [
    "rgb(255,0,0)", "rgb(255,64,0)", "rgb(255,128,0)", "rgb(255,192,0)", "rgb(255,255,0)",
    "rgb(192,255,0)", "rgb(128,255,0)", "rgb(64,255,0)", "rgb(0,255,0)", "rgb(0,255,64)",
    "rgb(0,255,128)", "rgb(0,255,192)", "rgb(0,255,255)", "rgb(0,192,255)", "rgb(0,128,255)",
    "rgb(0,64,255)", "rgb(0,0,255)", "rgb(64,0,255)", "rgb(128,0,255)", "rgb(192,0,255)"
  ];

  const radius = 150;

  const calculatePath = (index, total) => {
    const anglePerSlice = 2 * Math.PI / total;
    const startAngle = index * anglePerSlice;
    const endAngle = startAngle + anglePerSlice;

    const startX = radius + radius * Math.cos(startAngle);
    const startY = radius + radius * Math.sin(startAngle);
    const endX = radius + radius * Math.cos(endAngle);
    const endY = radius + radius * Math.sin(endAngle);

    return [
      `M ${radius} ${radius}`,
      `L ${startX} ${startY}`,
      `A ${radius} ${radius} 0 0 1 ${endX} ${endY}`,
      `Z`
    ].join(' ');
  };

  const handleColorSelect = (color) => {
    const rgb = color.match(/\d+/g).map(Number);
    const rgba = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`;
    const hsl = rgbToHSL(rgb[0], rgb[1], rgb[2]);
    const cmyk = rgbToCMYK(rgb[0], rgb[1], rgb[2]);
    const xyz = rgbToXYZ(rgb[0], rgb[1], rgb[2]);
    const cielab = rgbToCIELAB(rgb[0], rgb[1], rgb[2]);

    setSelectedColor(color);
    setHoverColorInfo(`RGB: ${color}\nRGBA: ${rgba}\nHSL: ${hsl}\nCMYK: ${cmyk}\nXYZ: ${xyz}\nCIE LAB: ${cielab}`);
  };

  const rgbToHSL = (r, g, b) => {
    r /= 255;g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if(max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: break;
      }
      h /= 6;
    }
    return `hsl(${(h * 360).toFixed(1)}, ${(s * 100).toFixed(1)}%, ${(l * 100).toFixed(1)}%)`;
  };

  const rgbToCMYK = (r, g, b) => {
    const k = 1 - Math.max(r, g, b) / 255;
    const c = (1 - r / 255 - k) / (1 - k);
    const m = (1 - g / 255 - k) / (1 - k);
    const y = (1 - b / 255 - k) / (1 - k);
    return `cmyk(${(c * 100).toFixed(1)}%, ${(m * 100).toFixed(1)}%, ${(y * 100).toFixed(1)}%, ${(k * 100).toFixed(1)}%)`;
  };

  return (
    <div className="flex flex-col items-center p-4">
      <svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
        {colors.map((color, index) => (
          <path
            key={index}
            d={calculatePath(index, colors.length)}
            fill={color}
            stroke={color === selectedColor ? "black" : "white"}
            strokeWidth={color === selectedColor ? "2" : "1"}
            onMouseEnter={() => handleColorSelect(color)}
            onClick={() => handleColorSelect(color)}
          />
        ))}
      </svg>
      <div className="mt-2 text-center text-lg whitespace-pre-line">
        {hoverColorInfo}
      </div>
    </div>
  );
};

export default ColorWheel;
