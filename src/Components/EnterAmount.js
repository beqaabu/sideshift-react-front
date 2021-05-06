import React from 'react';

class EnterAmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { this.setState({value: event.target.value});  }
  handleSubmit(event) {
      alert('Deposit Amount ' + this.state.value);
      event.preventDefault();
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
