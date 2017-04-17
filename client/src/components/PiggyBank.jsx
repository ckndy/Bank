import React from 'react';

export default class PiggyBank extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total:0
    }
  }

  addToSavings() {
    const input = document.getElementById("cash-amount");
    const amount = parseInt(input.value);
    this.setState({
      total: this.state.total + amount
    })
  }

  subtractFromSavings() {
    this.setState({
      total: 0
    })
  }

  render() {
    return (
      <div >
      <h1>{this.props.title}</h1>
      <h3>{this.props.owner}</h3>
      <p>Total: £{this.state.total}</p>
      <input id="cash amount"/>
      <button onClick={ () => { this.addToSavings() } }>Add</button>
      <button onClick={ () => { this.subtractFromSavings() } }>Withdraw</button>
      </div>
      )
  }

}

