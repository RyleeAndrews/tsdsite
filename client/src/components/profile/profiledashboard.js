import './profile.scss';
import React from 'react';
import AuthDashboard from '../auth/authdashboard.js';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './profileactions.js';
import {renderIf, photoToDataUrl} from '../../lib/helperLib.js';
import ProfileForm from './profileform.js';
import EditProfile from './editProfile.js';


class Profile extends React.Component {
  constructor(props){
    super(props);

    let initialState = {
      isEditing: false,
    };

    this.editToggle = this.editToggle.bind(this);
    this.state = Object.assign(initialState, this.props.profile);
  }

  editToggle(){
    this.setState({isEditing: !this.state.isEditing});
  }

  render(){
    console.log('yoooooo', this.props.profile);
    return(
      <div>
        {!this.props.auth.token ?
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
            <div className="profileBody">
              <div className="auth">
                <AuthDashboard className="authDash"/>
              </div>
            </div>
          </div>
          : (
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
                <div className="authpro">
                signed in as {this.props.auth.user.username}
                </div>
              </div>
              <div className="profileBody">
                {!this.props.profile.firstname && !this.state.isEditing ?
                  <div className="formcontain">
                    <div className="profileformwords">
                      Add your profile information
                    </div>
                    <ProfileForm profileCreate={this.props.profileCreate}/>
                    <button className="editBtn" type="submit" onClick={this.editToggle}> edit profile info </button>
                  </div>
                  :
                  null
                }
                {
                  this.props.profile.firstname && !this.state.isEditing ?
                    <div className="containall">
                      <div className="containname">
                        <div className="user"> Your user info </div>
                        <div className="first"> {this.props.profile.firstname} </div>
                        <br/>
                        <div className="last"> {this.props.profile.lastname} </div>
                        <br />
                        <div className="company"> {this.props.profile.companyname} </div>
                        <button className="editBtn2" type="submit" onClick={this.editToggle}> edit profile info </button>
                      </div>
                    </div>
                    :
                    null
                }
                {
                  this.state.isEditing ?
                    <EditProfile />
                    :
                    null
                }
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

const mapDispatchToProps = ( dispatch, getState ) => ({
  profileCreate: profile => dispatch(actions.profileCreate(profile)),
  profileLoad: profile => dispatch(actions.profileLoad()),
  profileInitialize: () => dispatch(actions.profileInitialize()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
