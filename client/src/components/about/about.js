import React from 'react';
import { Link } from 'react-router-dom';
import './about.scss';

class About extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return (
      <div>
        <div className="head">
          <h1 className="tsdhead"> Total Screen Design </h1>
          <div className="btnHead">
            <Link to="/">
              <button className="pageBtn"> Home </button>
            </Link>
            <Link to="/about">
              <button className="pageBtn"> About </button>
            </Link>
            <Link to="/contact">
              <button className="pageBtn"> Contact </button>
            </Link>
            <div className="dropdown">
              <button className="pageBtn"> Catalog </button>
              <div className="dropdown-content">
                <a href="https://www.companycasuals.com/totalscreendesign/start.jsp" rel="noopener noreferrer"
                  target="_blank"> Catalog 1</a>
                <a href="http://www.4logowearables.com/cgi-bin/hw/hwb/chw-browse-brand.w?hwCN=197208212203201210201214205199187201198215205216201&hwCNCD=&hwST=1"
                  rel="noopener noreferrer" target="_blank"> Catalog 2</a>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutBody">
          <p className="aboutP"> Total Screen Design is your premier source for printed and embroidered fabric goods. Located in
          the pristine Northwest corner of Montana we provide goods for all seasons. Whether you&#39;re looking for
          promotional items for your company or a jacket to get for that special someone during the holidays we
          got you covered. We have been in business for over 30 years and provide the quality you demand. Satisfaction is what we
          provide, along with great customer service.</p>
          <p className="aboutP2">
            We pride ourselves in offering you the customer the best experience. From concept we work with you to design the best
            logo that will set you apart. We offer many great brands to choose from to find the right material for what you are
            looking for. If we don&#39;t have it, we will find it! Our goal is for you to look the very best. 
          </p>
        </div>
        <div className="footy2">
          <div className="footwords2">
            Website made by Rylee Andrews @2018
          </div>
        </div>
      </div>
    );
  }
}

export default About;
