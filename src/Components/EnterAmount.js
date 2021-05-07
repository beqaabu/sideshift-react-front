import React from 'react';

class EnterAmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateAmount = props.updateAmount;
  }

  handleChange(event) { 
    this.setState({value: event.target.value});  
    this.updateAmount({...event});
  }

  handleSubmit(event) {
      alert('Quote Posted for Given Amount: ' + this.state.value);
      this.updateAmount()
      event.preventDefault();

  }

  updateAmount(event){
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>        
        <label>Deposit Amount:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <p>Your Deposit Amount is: {this.state.value}</p>        
        </label>
        
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EnterAmount;
