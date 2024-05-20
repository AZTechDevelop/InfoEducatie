import "../stiluri.css";
import { useState } from "react";

function MixerCuloareRGBA() {
  const [rosu, setRosu] = useState(0);
  const [verde, setVerde] = useState(0);
  const [albastru, setAlbastru] = useState(0);
  const [alfa, setAlfa] = useState(1);

  return (
    <>
      <h4 className="w-full my-3 md:w-2/6">Mixer de culori RGBA</h4>
      <div className="flex flex-wrap items-center justify-center p-5">
        <div className="w-full md:w-3/5 space-y-4 block">
          <div>
            <label className="block">Roșu (0-255): </label>
            <input
              type="range"
              min="0"
              max="255"
              value={rosu}
              onChange={(e) => setRosu(e.target.value)}
              className="w-full cursor-pointer"
            />
            <span className="text-sm">{rosu}</span>
          </div>
          <div>
            <label className="block">Verde (0-255): </label>
            <input
              type="range"
              min="0"
              max="255"
              value={verde}
              onChange={(e) => setVerde(e.target.value)}
              className="w-full cursor-pointer"
            />
            <span className="text-sm">{verde}</span>
          </div>
          <div>
            <label className="block">Albastru (0-255): </label>
            <input
              type="range"
              min="0"
              max="255"
              value={albastru}
              onChange={(e) => setAlbastru(e.target.value)}
              className="w-full cursor-pointer"
            />
            <span className="text-sm">{albastru}</span>
          </div>
          <div>
            <label className="block">Alfa (0-1): </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={alfa}
              onChange={(e) => setAlfa(e.target.value)}
              className="w-full cursor-pointer"
            />
            <span className="text-sm">{alfa}</span>
          </div>
        </div>

        <div
          className="m-auto md:mt-0 md:ml-4 w-32 h-32 flex items-center justify-center rounded-lg shadow-md"
          style={{
            backgroundColor: `rgba(${rosu}, ${verde}, ${albastru}, ${alfa})`,
          }}
        >
          <div className="text-white text-center text-sm">
            Culoarea Rezultată
          </div>
        </div>
      </div>
    </>
  );
}

export default MixerCuloareRGBA;
