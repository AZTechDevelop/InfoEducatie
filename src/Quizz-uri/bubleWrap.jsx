import React from 'react';
import { Howl } from 'howler';

const BubbleWrap = () => {
  const bubblesCount = 59;
  const bubbles = Array.from({ length: bubblesCount }, (_, i) => i + 1);

  const popSound = new Howl({
    src: [
      'https://assets.codepen.io/416221/bubble_wrap.mp3',
      'https://assets.codepen.io/416221/bubble_wrap.ogg'
    ],
    autoplay: false,
    loop: false,
    volume: 1.0
  });

  const handlePop = () => {
    popSound.play();
  };

  const handleReset = () => {
    // Reset all checkboxes to be unchecked
    document.querySelectorAll('.bw__input').forEach(input => {
      input.checked = false;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[hsl(223,90%,20%)]">
      <div className="flex flex-wrap justify-center bg-[hsl(223,10%,58%)] p-4 mb-6 rounded shadow-inner shadow-[hsl(223,10%,75%)] w-56 mix-blend-hard-light">
        {bubbles.map(bubble => (
          <div key={bubble} className="relative w-8 h-7 m-0.5">
            <input
              type="checkbox"
              className="absolute w-full h-full opacity-0 cursor-pointer"
              id={`bubble-${bubble}`}
              onClick={handlePop}
            />
            <label
              htmlFor={`bubble-${bubble}`}
              className="absolute top-0 left-0.5 w-full h-full bg-[hsl(0,0%,70%)] rounded-full transition-all duration-150 ease-in-out"
            ></label>
          </div>
        ))}
      </div>
      <button
        className="py-3 px-6 mb-6 text-white bg-[hsl(223,90%,90%)] hover:bg-[hsl(223,90%,50%)] rounded shadow focus:outline-none focus:shadow-outline transform active:translate-y-1 transition duration-150 ease-in-out"
        onClick={handleReset}
      >
        New Sheet
      </button>
    </div>
  );
};

export default BubbleWrap;
