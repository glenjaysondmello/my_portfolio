import React from "react";
import "./css/universe.css"; // Importing CSS file

const Universe = () => {
  const orbits = [0, 1, 2];

  return (
    <div id="universe">
      <div id="galaxy">
        <div className="circle"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>

        {orbits.map((i) => (
          <div key={i} id={`orbit${i}`} className="orbit">
            <div id={`pos${i}`} className="pos">
              <div id={`dot${i}`} className="dot"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Universe;
