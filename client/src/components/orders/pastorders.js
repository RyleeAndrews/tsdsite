import React from 'react';
import * as actions from './orderactions.js';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import AuthDashboard from '../auth/authdashboard.js';
import './order.scss';

class PastOrders extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.orders;
  }
  render(){
    return(
      <div>
        <div className="head1">
          <h1 className="word1"> Total Screen Design </h1>
          <div className="btnHead">
            <Link to="/">
              <button className="pageBtn2"> Home </button>
            </Link>
            <Link to="/about">
              <button className="pageBtn2"> About </button>
            </Link>
            <Link to="/contact">
              <button className="pageBtn2"> Contact </button>
            </Link>
          </div>
          <div className="auth">
            <AuthDashboard className="authDash"/>
          </div>
        </div>
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
        <div> {this.props.orders.sizes} </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders,
});

const mapDispatchToProps = (dispatch, getState) => ({
  orderCreate: orders => dispatch(actions.orderCreate(orders)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PastOrders);
