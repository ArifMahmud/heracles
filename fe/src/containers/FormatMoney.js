import React, { Component } from 'react';
import axios from 'axios';
import FormatMoneyComponent from '../components/FormatMoney';

class FormatMoney extends Component {
  state = {
    value: '',
    formatted: ''
  }

  valueChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }
  
  formatMoney = async () => {
    const { value } = this.state;

    const { data: { formatted }} = await axios.post(`http://localhost:8080/format`, { value });
    this.setState({
      formatted
    })
  }

  render() {
    const { value, formatted } = this.state;
    return (
      <FormatMoneyComponent
        valueChange={this.valueChange}
        formatMoney={this.formatMoney}
        value={value}
        formatted={formatted}
      />
    );
  }
}

export default FormatMoney;