import React, { useState } from "react";

const RoataDublaComplementara = () => {
  const culori = ["red", "blue", "green", "orange"];

  const [indiceCuloareSelectata, setIndiceCuloareSelectata] = useState(null);

  const raza = 150;
  const centruX = 200;
  const centruY = 200;

  const calculeazaCoordonatePentruUnghi = (unghi, raza) => {
    let rad = (unghi * Math.PI) / 180;
    return {
      x: centruX + raza * Math.cos(rad),
      y: centruY + raza * Math.sin(rad),
    };
  };

  const calculeazaDateTraseu = (index, total, raza) => {
    const unghi = 360 / total;
    const unghiStart = unghi * index;
    const unghiSfarsit = unghiStart + unghi;
    const arcMare = unghi > 180 ? 1 : 0;

    const start = calculeazaCoordonatePentruUnghi(unghiStart, raza);
    const end = calculeazaCoordonatePentruUnghi(unghiSfarsit, raza);

    return `M${centruX},${centruY} L${start.x},${start.y} A${raza},${raza} 0 ${arcMare},1 ${end.x},${end.y} Z`;
  };

  const gestioneazaClick = (index) => {
    setIndiceCuloareSelectata(index);
  };

  const obtineCuloareUmplere = (index) => {
    if (indiceCuloareSelectata === null) return culori[index];
    const numarTotalCulori = culori.length;
    const complement1 = (indiceCuloareSelectata + 1) % numarTotalCulori; // Adiacent direct
    const complement2 =
      (indiceCuloareSelectata + numarTotalCulori / 2) % numarTotalCulori; // Opus direct
    const complement3 = (complement2 + 1) % numarTotalCulori; // Adiacent opusului
    if (
      [indiceCuloareSelectata, complement1, complement2, complement3].includes(
        index
      )
    ) {
      return culori[index];
    }
    return "grey"; // Restul culorilor sunt gri
  };

  return (
    <svg width="400" height="400" viewBox="0 0 400 400">
      {culori.map((_, index) => (
        <path
          key={index}
          d={calculeazaDateTraseu(index, culori.length, raza)}
          fill={obtineCuloareUmplere(index)}
          onClick={() => gestioneazaClick(index)}
        />
      ))}
    </svg>
  );
};

export default RoataDublaComplementara;
