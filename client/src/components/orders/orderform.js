import React from 'react';

class OrderForm extends React.Component {
  constructor(props){
    super(props);

    let initialState = {
      sizes: '',
      individual: '',
      company: '',
      address: '',
      contact: '',
      email: '',
      style: '',
      supplier: '',
      quantity: '',
      color: '',
      placement: '',
      inkColor: '',
    };

    this.handleOrderCreate = this.handleOrderCreate.bind(this);
    this.handleChangeSizes = this.handleChangeSizes.bind(this);
    this.handleChangeIndividual = this.handleChangeIndividual.bind(this);
    this.handleChangeCompany = this.handleChangeCompany.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeContact = this.handleChangeContact.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeStyle = this.handleChangeStyle.bind(this);
    this.handleChangeSupplier = this.handleChangeSupplier.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangePlacement = this.handleChangePlacement.bind(this);
    this.handleChangeInkColor = this.handleChangeInkColor.bind(this);
    this.state = Object.assign(initialState, this.props.orders);
  }

  handleChangeSizes(event){
    event.preventDefault();
    this.setState({sizes: event.target.value});
  }

  handleChangeIndividual(event){
    event.preventDefault();
    this.setState({individual: event.target.value});
  }

  handleChangeCompany(event){
    event.preventDefault();
    this.setState({company: event.target.value});
  }

  handleChangeAddress(event){
    event.preventDefault();
    this.setState({address: event.target.value});
  }

  handleChangeContact(event){
    event.preventDefault();
    this.setState({contact: event.target.value});
  }

  handleChangeEmail(event){
    event.preventDefault();
    this.setState({email: event.target.value});
  }

  handleChangeStyle(event){
    event.preventDefault();
    this.setState({style: event.target.value});
  }

  handleChangeSupplier(event){
    event.preventDefault();
    this.setState({supplier: event.target.value});
  }

  handleChangeQuantity(event){
    event.preventDefault();
    this.setState({quantity: event.target.value});
  }

  handleChangeColor(event){
    event.preventDefault();
    this.setState({color: event.target.value});
  }

  handleChangePlacement(event){
    event.preventDefault();
    this.setState({placement: event.target.value});
  }

  handleChangeInkColor(event){
    event.preventDefault();
    this.setState({inkColor: event.target.value});
  }

  handleOrderCreate(event){
    event.preventDefault();
    this.props.orderCreate(Object.assign({}, this.state));
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleOrderCreate}>
          sizes: <input value={this.state.sizes} onChange={this.handleChangeSizes} />
          individual: <input value={this.state.individual} onChange={this.handleChangeIndividual} />
          company: <input value={this.state.company} onChange={this.handleChangeCompany} />
          address: <input value={this.state.address} onChange={this.handleChangeAddress} />
          contact: <input value={this.state.contact} onChange={this.handleChangeContact} />
          email: <input value={this.state.email} onChange={this.handleChangeEmail} />
          style: <input value={this.state.style} onChange={this.handleChangeStyle} />
          supplier: <input value={this.state.supplier} onChange={this.handleChangeSupplier} />
          quantity: <input value={this.state.quantity} onChange={this.handleChangeQuantity} />
          color: <input value={this.state.color} onChange={this.handleChangeColor} />
          placement: <input value={this.state.placement} onChange={this.handleChangePlacement} />
          ink-color: <input value={this.state.inkColor} onChange={this.handleChangeInkColor} />
          <button type="submit"> submit </button>
        </form>
      </div>
    );
  }
}

export default OrderForm;
