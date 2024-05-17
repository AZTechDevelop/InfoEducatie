import React from "react";

function RoataCulorilorNatura() {
  return (
    <div className="container mx-auto px-4 py-6 text-center">
      <div
        className="w-64 h-64 mx-auto rounded-full"
        style={{
          backgroundImage: `conic-gradient(
                    red 0%, red 33%, 
                    yellow 33%, yellow 66%, 
                    blue 66%, blue 100%
                )`,
        }}
      ></div>
    </div>
  );
}

export default RoataCulorilorNatura;
