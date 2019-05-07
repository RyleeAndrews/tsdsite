
import './profile.scss';
import React from 'react';
import uuid from 'uuid/v4';

class ProfileForm extends React.Component {
  constructor(props){
    super(props);

    let initialState = {
      firstname: '',
      lastname: '',
      companyname: '',
      profileId: uuid(),
    };

    this.state = Object.assign(initialState, this.props.profile);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeOfFirstname = this.onChangeOfFirstname.bind(this);
    this.onChangeOfLastname = this.onChangeOfLastname.bind(this);
    this.onChangeOfCompanyname = this.onChangeOfCompanyname.bind(this);
  }

  onChangeOfFirstname(event){
    event.preventDefault();
    this.setState({ firstname: event.target.value });
  }

  onChangeOfLastname(event){
    event.preventDefault();
    this.setState({ lastname: event.target.value});
  }

  onChangeOfCompanyname(event){
    event.preventDefault();
    this.setState({ companyname: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.profileCreate(Object.assign({}, this.state));
  }

  render(){
    return(
      <div>
        <form className="profileform" onSubmit={this.handleSubmit}>
          <label id="firstname"> first name </label>
          <input htmlFor="firstname" value={this.state.firstname} onChange={this.onChangeOfFirstname} />
          <br/>
          <label id="lastname"> last name </label>
          <input htmlFor="lastname" value={this.state.lastname} onChange={this.onChangeOfLastname} />
          <br />
          <label id="companyname"> company name </label>
          <input htmlFor="companyname" value={this.state.companyname} onChange={this.onChangeOfCompanyname} />
          <br />
          <button type="submit"> submit </button>
        </form>
      </div>
    );
  }
}

export default ProfileForm;
