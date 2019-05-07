import React from 'react';
import * as actions from './orderactions.js';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import AuthDashboard from '../auth/authdashboard.js';
import OrderForm from './orderform.js';

class OrderDashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div>
        {this.props.auth.token ?
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
              <div className="authy">
                signed in as {this.props.auth.user.username}
              </div>
            </div>
          </div>
          :
          <div>
            <div>
              <AuthDashboard />
            </div>
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
          </div>
        }
        <div className="btnProfile">
          <Link to="/profile">
            <button className="pageBtn3"> Profile </button>
          </Link>
          <Link to="/editprofile">
            <button className="pageBtn3"> Edit Profile </button>
          </Link>
          <Link to="/order">
            <button className="pageBtn3"> Order </button>
          </Link>
          <Link to="/pastorders">
            <button className="pageBtn3"> Past Orders </button>
          </Link>
          <Link to="/uploadartwork">
            <button className="pageBtn3"> Upload Artwork </button>
          </Link>
        </div>
        <OrderForm orders={this.props.orders} orderCreate={this.props.orderCreate} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders,
  auth: state.auth,
});

const mapDispatchToProps = (dispatch, getState) => ({
  orderCreate: orders => dispatch(actions.orderCreate(orders)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDashboard);
