import React from 'react';

const Img1 = () => {
  return (
    <div className="relative h-64 xl:w-2/4 md:w-2/5 sm:w-3/4 flex justify-center items-center  bg-black my-3 rounded-xl w-2/4 mx-8">
   
      <div className="absolute w-32 h-32 rounded-full mix-blend-screen"
           style={{backgroundColor: 'rgb(255, 0, 0)', transform: 'translate(30%, 30%)'}}></div>
      <div className="absolute w-32 h-32 rounded-full mix-blend-screen"
           style={{backgroundColor: 'rgba(0, 255, 0)', transform: 'translate(-30%, 30%)'}}></div>
      <div className="absolute w-32 h-32 rounded-full mix-blend-screen"
           style={{backgroundColor: 'rgba(0, 0, 255)', transform: 'translate(0, -20%)'}}></div>
    </div>
  );
};

export default Img1;
