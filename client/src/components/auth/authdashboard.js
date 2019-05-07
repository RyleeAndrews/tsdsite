import './auth.scss';
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './authactions.js';
import * as profileactions from '../profile/profileactions.js';
import AuthForm from './authform.js';
import cookie from 'react-cookies';

class AuthDashboard extends React.Component {
  constructor(props){
    super(props);

    this.logoutOf = this.logoutOf.bind(this);
    this.state = {
      init: true,
      signinto: false,
      signinPage: true,
    };
  }

  UNSAFE_componentWillMount(){
    this.props.authLogin()
    this.setState({init: false});

  }

  componentWillUnmount(){
    delete(this.stop);
  }

  logoutOf(){
    cookie.remove('auth', {path: '/'});
    this.props.authLogout();
    location.reload();
  }


  render(){
    console.log(this.props.auth);
    if(this.state.init){
      return null;
    }
    return(
      <div>
        {!this.props.auth.token ?
          <AuthForm
            signIn={this.props.authLogin}
            signUp={this.props.authCreate}
          />
          :
          <div className="authy">
            <p className="signedIn"> signed in as {this.props.auth.user.username}</p>
            <Link to="/profile">
              <button type="submit" className="profilebtn"> profile </button>
            </Link>
            <button type="submit" className="logoutbtn" onClick={this.logoutOf}> logout </button>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

const mapDispatchToProps = (dispatch, getState) => ({
  authLogin: user => dispatch(actions.authLogin(user)),
  authCreate: user => dispatch(actions.authCreateAccount(user)),
  authLogout: () => dispatch(actions.authLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthDashboard);
