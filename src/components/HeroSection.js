import React from "react";
import pc from '../assests/images/Mockup.png';

const HeroSection = () => {
  return (
    <div className="container">
      <div className="row" style={{ textAlign: "center", padding: "50px" }}>
        <h1>Web3Markr Reading</h1>
        <h1>How You Create</h1>
        <h5>Unlock the blockchain potential to create</h5>
        <h5>Web3Marker Redefining</h5>
      </div>
      <div className="row">
      <img
          src={pc}
          alt='hero'
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
