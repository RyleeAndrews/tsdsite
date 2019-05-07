import React from 'react';
import { Link } from 'react-router-dom';
import './contact.scss';

class Contact extends React.Component {
  constructor(props){
    super(props);


    this.state = {};
  }
  render(){
    return(
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
        <h1 className="question"> Have a Question? Great We Are Here To Help! </h1>
        <div className="contactBody">
          <div className="inputwrapper">
            <h3 className="inputhead"> Your name: </h3>
            <input className="input1"/>
            <br/>
            <h3 className="inputhead"> Your phone number: </h3>
            <input className="input1"/>
            <h3 className="inputhead"> The reason why you are contacting us today </h3>
            <textarea className="textarea"/>
          </div>
          <h4 className="reach"> Or reach us 9 - 5 (MST) Monday - Friday at 406-883-9218 </h4>
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

export default Contact;
