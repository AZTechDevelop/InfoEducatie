import React from "react";

function RoataCulorilor() {
  return (
    <div className="container mx-auto px-4 py-6 text-center">
      <div
        className="w-64 h-64 mx-auto rounded-full"
        style={{
          backgroundImage: `conic-gradient(
                    red, 
                    orange, 
                    yellow, 
                    green, 
                    blue, 
                    indigo, 
                    violet,
                    red
                )`,
        }}
      ></div>
    </div>
  );
}

export default RoataCulorilor;
