import React from 'react';
import './auth.scss';

class AuthForm extends React.Component {
  constructor(props){
    super(props);

    this.handleChangeOfUsername= this.handleChangeOfUsername.bind(this);
    this.handleChangeOfPassword = this.handleChangeOfPassword.bind(this);
    this.handleChangeOfEmail = this.handleChangeOfEmail.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
    this.submitSignin = this.submitSignin.bind(this);
    this.signinToggle = this.signinToggle.bind(this);

    this.state = {
      username: '',
      password: '',
      email: '',
      signedIn: false,
    };
  }

  signinToggle(event){
    this.setState({signedIn: !this.state.signedIn});
  }

  handleChangeOfUsername(event){
    event.preventDefault();
    this.setState({username: event.target.value});
  }

  handleChangeOfPassword(event){
    event.preventDefault();
    this.setState({password: event.target.value});
  }

  handleChangeOfEmail(event){
    event.preventDefault();
    this.setState({email: event.target.value});
  }

  submitSignup(event){
    event.preventDefault();
    this.props.signUp(Object.assign({}, this.state));
  }

  submitSignin(event){
    event.preventDefault();
    this.props.signIn(Object.assign({}, this.state));
  }

  render(){
    return(
      <div>
        {!this.state.signedIn ?
          <div>
            <form className="signinForm" onSubmit={this.submitSignin}>
              <label id="username"> username:
                <br/>
                <input htmlFor="username" value={this.state.username} onChange={this.handleChangeOfUsername} />
              </label>
              <br/>
              <label id="password"> password:
                <br/>
                <input htmlFor="password"  type="password" value={this.state.password} onChange={this.handleChangeOfPassword} />
              </label>
              <br/>
              <button className="signBtn" type="submit"> submit </button>
              <button type="submit" onClick={this.signinToggle}> sign up </button>
            </form>
          </div>
          :
          <div>
            <form className="signupForm" onSubmit={this.submitSignup}>
              <label id="username"> create a username:
                <br/>
                <input htmlFor="username" value={this.state.username} onChange={this.handleChangeOfUsername}/>
              </label>
              <br/>
              <label id="signUpPassword"> create a password:
                <br/>
                <input htmlFor="signUpPassword" type="password" value={this.state.password} onChange={this.handleChangeOfPassword}/>
              </label>
              <br/>
              <label id="signUpPassword"> enter a email:
                <br/>
                <input htmlFor="signUpPassword" type="password" value={this.state.email} onChange={this.handleChangeOfEmail}/>
              </label>
              <br/>
              <button className="signBtn" type="submit"> submit </button>
              <button className="submitbtn" type="submit" onClick={this.signinToggle}> sign in </button>
            </form>
          </div>
        }
      </div>
    );
  }
}

export default AuthForm;
