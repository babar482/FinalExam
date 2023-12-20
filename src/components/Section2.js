import * as React from "react";
import pc1 from '../assests/images/pic2.png';

const Section2 = () => {
    return (
        <>
             <div className="container">
      <div className="row">
        <div className="col col-sm-12 col-md-4 col-lg-4">
          <h1>Create your own Masterpiece</h1>
          <h5>
            Most entrepreneurs want to create their own web3 sites;
            unfortunately, they don't know much about creating one. Web3Makr
            makes it easier for newbies to create a blockchain-based
            collectibles solution without the hassle of leaving their favorite
            creation tools and by simple drag and drop functionality.
          </h5>
        </div>

        <div className="col col-sm-12 col-md-4 col-lg-4">
          <img src={pc1} alt="hero"
           width="400" height="600" />
        </div>
      </div>
    </div>
                
            
        </>
    );
};

export default Section2;
